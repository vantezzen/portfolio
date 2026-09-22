"use client";

import { Chat } from "@ai-sdk/react";
import { useMediaQuery } from "@mantine/hooks";
import { DefaultChatTransport } from "ai";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import headImage from "@/assets/head.jpeg";
import { EASE_OUT } from "@/components/motion";
import { bennet } from "@/content/bennet/persona";
import type { BenNetMessage } from "@/lib/bennet/types";
import { BenNetChat, createWelcome } from "./chat";

/**
 * BenNet's launcher and panel. Mounted once in the root layout, so the
 * conversation survives closing the panel and navigating between pages.
 */
export function BenNet() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [chat] = useState(
    () =>
      new Chat<BenNetMessage>({
        id: "bennet",
        transport: new DefaultChatTransport({ api: "/api/bennet" }),
        messages: [createWelcome()],
      }),
  );
  const desktop = useMediaQuery("(min-width: 640px)", true, {
    getInitialValueInEffect: false,
  });
  const reduce = useReducedMotion();
  const launcherRef = useRef<HTMLButtonElement>(null);

  function show() {
    setOpen(true);
    setHasOpened(true);
  }

  function close() {
    setOpen(false);
    launcherRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Nothing should scroll behind the full-screen sheet on phones.
  useEffect(() => {
    if (!open || desktop) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open, desktop]);

  const timing = (duration: number) =>
    reduce ? { duration: 0 } : { duration, ease: EASE_OUT };

  // Desktop: grows out of the launcher's corner. Phone: a sheet sliding up.
  const panel = desktop
    ? {
        initial: { opacity: 0, scale: 0.96, y: 12 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.97, y: 8, transition: timing(0.18) },
      }
    : {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 40, transition: timing(0.2) },
      };

  return (
    <>
      <motion.button
        ref={launcherRef}
        type="button"
        onClick={show}
        aria-label={`Chat with ${bennet.name}`}
        aria-hidden={open}
        tabIndex={open ? -1 : 0}
        initial={{ opacity: 0, y: 8 }}
        animate={
          open
            ? { opacity: 0, scale: 0.9, y: 8, pointerEvents: "none" as const }
            : { opacity: 1, scale: 1, y: 0, pointerEvents: "auto" as const }
        }
        transition={{ ...timing(0.3), delay: hasOpened || reduce ? 0 : 0.6 }}
        className="fixed right-4 bottom-4 z-40 flex h-11 items-center gap-2.5 rounded-full border border-neutral-200/80 bg-white/90 pr-4 pl-1.5 text-[14px] font-medium text-neutral-800 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25),0_1px_2px_rgba(0,0,0,0.06)] backdrop-blur-md transition-[box-shadow,background-color] duration-150 ease-out hover:bg-white hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.06)] active:scale-[0.97] sm:right-5 sm:bottom-5"
      >
        <span className="relative">
          <Image
            src={headImage}
            alt=""
            className="size-8 rounded-full object-cover"
          />
          <span
            className="absolute -right-px -bottom-px size-2.5 rounded-full border-2 border-white bg-emerald-500"
            aria-hidden
          />
        </span>
        Ask {bennet.name}
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {!desktop && (
              <motion.div
                key="backdrop"
                className="fixed inset-0 z-40 bg-neutral-900/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={timing(0.24)}
                onClick={close}
                aria-hidden
              />
            )}
            <motion.div
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label={`Chat with ${bennet.name}`}
              style={{ transformOrigin: "bottom right" }}
              {...panel}
              transition={timing(0.24)}
              className="fixed inset-x-0 bottom-0 z-50 flex h-[92dvh] flex-col overflow-hidden rounded-t-[28px] bg-white shadow-[0_24px_64px_-16px_rgba(0,0,0,0.28),0_0_0_1px_rgba(0,0,0,0.06)] will-change-transform sm:inset-auto sm:right-5 sm:bottom-5 sm:h-[min(640px,calc(100dvh-2.5rem))] sm:w-[380px] sm:rounded-[28px]"
            >
              <BenNetChat chat={chat} onClose={close} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
