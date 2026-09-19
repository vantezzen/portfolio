"use client"

import * as React from "react"
import { useMotionValue, useMotionValueEvent, useReducedMotion, useSpring } from "motion/react"

type Gesture = {
  pointer: number
  list: HTMLElement
  tabs: { element: HTMLElement; rect: DOMRect }[]
  rect: DOMRect
  width: number
  inset: number
}

/** Velocity in px/s at which the lens reaches its maximum stretch. */
const STRETCH_VELOCITY = 2400
const MAX_STRETCH = 0.3
/** The stretch is a scale, so a wide lens is also capped in pixels of extra width. */
const MAX_STRETCH_PX = 28

/**
 * Pointer scrubbing for a Base UI tab list. The indicator lens follows the pointer horizontally on
 * a spring, stretches with its velocity and squashes across, and lifts while held. It never leaves
 * the track vertically. Release commits the tab under the pointer. Keyboard and click behavior stay
 * with Base UI.
 */
export function useTabGestures() {
  const gesture = React.useRef<Gesture | null>(null)
  const focusFrame = React.useRef(0)
  const suppressClick = React.useRef(false)
  const reducedMotion = useReducedMotion()
  const destination = useMotionValue(0)
  const position = useSpring(destination, { stiffness: 520, damping: 34, mass: 1 })
  const stretchTarget = useMotionValue(1)
  const stretch = useSpring(stretchTarget, { stiffness: 260, damping: 17, mass: 1 })

  useMotionValueEvent(position, "change", (left) => {
    const current = gesture.current
    if (!current) return
    current.list.style.setProperty("--drag-left", `${left}px`)
    current.list.style.setProperty("--drag-width", `${current.width}px`)
    if (!reducedMotion) {
      const velocity = Math.abs(position.getVelocity())
      const cap = Math.min(MAX_STRETCH, MAX_STRETCH_PX / current.width)
      stretchTarget.set(1 + Math.min(velocity / STRETCH_VELOCITY, cap))
    }
  })
  useMotionValueEvent(stretch, "change", (value) => {
    const current = gesture.current
    if (!current) return
    current.list.style.setProperty("--drag-stretch", value.toFixed(4))
    current.list.style.setProperty("--drag-squash", (1 - (value - 1) * 0.45).toFixed(4))
  })

  React.useEffect(() => () => cancelAnimationFrame(focusFrame.current), [])

  function target(current: Gesture, clientX: number) {
    const scale = current.list.offsetWidth / current.rect.width
    const left = (clientX - current.rect.left) * scale - current.width / 2
    const min = current.inset
    const max = current.list.offsetWidth - current.width - current.inset
    const clamped = Math.max(min, Math.min(max, left))
    // Past the ends the lens follows on a short rubber band.
    const overshoot = left - clamped
    return clamped + Math.sign(overshoot) * 10 * (1 - 1 / (1 + Math.abs(overshoot) / 40))
  }

  /** Marks the tab under the lens so its real label yields to the refracted copy. */
  function mark(current: Gesture, clientX: number) {
    for (const { element, rect } of current.tabs) {
      if (clientX >= rect.left && clientX <= rect.right) element.setAttribute("data-under-lens", "")
      else element.removeAttribute("data-under-lens")
    }
  }

  function finish() {
    const current = gesture.current
    if (!current) return
    gesture.current = null
    current.list.removeAttribute("data-scrubbing")
    for (const { element } of current.tabs) element.removeAttribute("data-under-lens")
    stretchTarget.jump(1)
    stretch.jump(1)
    current.list.style.setProperty("--drag-stretch", "1")
    current.list.style.setProperty("--drag-squash", "1")
    if (current.list.hasPointerCapture(current.pointer))
      current.list.releasePointerCapture(current.pointer)
  }

  return {
    onKeyDownCapture(event: React.KeyboardEvent<HTMLElement>) {
      if (event.defaultPrevented) return
      event.currentTarget.removeAttribute("data-pointer-focus")
      if (event.key === "Escape" && gesture.current) {
        event.preventDefault()
        finish()
        suppressClick.current = true
      }
    },
    onBlurCapture(event: React.FocusEvent<HTMLElement>) {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null))
        event.currentTarget.removeAttribute("data-pointer-focus")
    },
    onPointerDownCapture(event: React.PointerEvent<HTMLElement>) {
      suppressClick.current = false
      cancelAnimationFrame(focusFrame.current)
      if (event.button !== 0 || gesture.current || event.defaultPrevented) return
      const tab = (event.target as HTMLElement).closest<HTMLElement>('[role="tab"]')
      if (!tab || tab.hasAttribute("data-disabled") || tab.getAttribute("aria-disabled") === "true")
        return
      const list = event.currentTarget
      if (list.getAttribute("data-orientation") === "vertical") return
      const tabs = Array.from(list.querySelectorAll<HTMLElement>(':scope > [role="tab"]'))
        .filter(
          (item) =>
            !item.hasAttribute("data-disabled") && item.getAttribute("aria-disabled") !== "true",
        )
        .map((element) => ({ element, rect: element.getBoundingClientRect() }))
      const rect = list.getBoundingClientRect()
      const active =
        tabs.find((item) => item.element.getAttribute("aria-selected") === "true") ?? tabs[0]
      if (!active || !rect.width) return

      event.preventDefault()
      const scale = list.offsetWidth / rect.width
      const width = tab.getBoundingClientRect().width * scale
      const activeLeft = (active.rect.left - rect.left) * scale
      const inset = Math.max(0, (tabs[0].rect.left - rect.left) * scale) / 2
      const current: Gesture = { pointer: event.pointerId, list, tabs, rect, width, inset }
      gesture.current = current
      destination.jump(activeLeft)
      position.jump(activeLeft)
      list.style.setProperty("--drag-left", `${activeLeft}px`)
      list.style.setProperty("--drag-width", `${width}px`)
      list.style.setProperty("--drag-stretch", "1")
      list.style.setProperty("--drag-squash", "1")
      list.setAttribute("data-scrubbing", "")
      list.setAttribute("data-pointer-focus", "")
      list.setPointerCapture(event.pointerId)
      mark(current, event.clientX)
      const next = target(current, event.clientX)
      if (reducedMotion) position.jump(next)
      else destination.set(next)
    },
    onPointerMove(event: React.PointerEvent<HTMLElement>) {
      const current = gesture.current
      if (!current || event.pointerId !== current.pointer || event.defaultPrevented) return
      mark(current, event.clientX)
      const next = target(current, event.clientX)
      if (reducedMotion) position.jump(next)
      else destination.set(next)
    },
    onPointerUp(event: React.PointerEvent<HTMLElement>) {
      const current = gesture.current
      if (!current || event.pointerId !== current.pointer) return
      const hit = current.tabs.find(
        ({ rect }) =>
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top - 32 &&
          event.clientY <= rect.bottom + 32,
      )
      finish()
      if (hit && !event.defaultPrevented) {
        hit.element.click()
        focusFrame.current = requestAnimationFrame(() => {
          if (hit.element.isConnected && hit.element.getAttribute("aria-selected") === "true")
            hit.element.focus({ preventScroll: true })
        })
      }
      suppressClick.current = true
    },
    onPointerCancel(event: React.PointerEvent<HTMLElement>) {
      if (event.pointerId === gesture.current?.pointer) {
        finish()
        suppressClick.current = true
      }
    },
    onLostPointerCapture(event: React.PointerEvent<HTMLElement>) {
      if (event.pointerId === gesture.current?.pointer) finish()
    },
    onClickCapture(event: React.MouseEvent<HTMLElement>) {
      if (suppressClick.current && event.detail !== 0) {
        event.preventDefault()
        event.stopPropagation()
        suppressClick.current = false
      }
    },
  }
}
