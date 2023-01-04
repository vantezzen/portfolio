export function smoothScrollToAnchor(anchor: string) {
  const anchorElement = document.getElementById(anchor.replace("/#", ""));
  if (anchorElement) {
    const anchorTop =
      anchorElement.getBoundingClientRect().top + window.scrollY;
    const scrollY = anchorTop - 100; // Handle header height

    if (scrollY !== window.scrollY) {
      window.scroll({
        top: scrollY,
        behavior: "smooth",
      });
      window.history.pushState(null, "", anchor);
    }
  }
}

export function isAnchorLink(link: string) {
  return link.startsWith("/#");
}
