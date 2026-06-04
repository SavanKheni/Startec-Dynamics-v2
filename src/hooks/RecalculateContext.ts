import { createContext, useContext } from "react";

export const RecalculateContext = createContext<(() => void) | null>(null);

export const useRecalculate = () => useContext(RecalculateContext);