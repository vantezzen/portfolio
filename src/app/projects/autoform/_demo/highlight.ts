"use client";

import { createContext, useContext } from "react";

/** Which top-level schema field is hovered, shared between the code pane and the form. */
export const HighlightContext = createContext<{
  hovered: string | null;
  setHovered: (key: string | null) => void;
}>({ hovered: null, setHovered: () => {} });

export const useHighlight = () => useContext(HighlightContext);
