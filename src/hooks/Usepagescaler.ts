import { useEffect, useRef, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

interface UsePageScalerOptions {
    minWidth?: number;
    maxWidth?: number;
    designWidth?: number;
}

export const usePageScaler = (options: UsePageScalerOptions = {}) => {
    const { minWidth = 1024, designWidth = 1920 } = options;

    const scalerRef = useRef<HTMLDivElement>(null);
    const [wrapperHeight, setWrapperHeight] = useState<number | "auto">("auto");

    const location = useLocation();

    // ✅ Extracted into useCallback so it can be called externally too
    const recalculate = useCallback(() => {
        const scaler = scalerRef.current;
        if (!scaler) return;

        const screenWidth = window.innerWidth;
        const scaleFactor = screenWidth / designWidth;

        // ✅ SMALL SCREEN — unchanged
        if (screenWidth < minWidth) {
            scaler.style.transform = "none";
            scaler.style.width = "100%";
            document.body.style.overflowX = "auto";
            setWrapperHeight("auto");
            return;
        }

        // ✅ 1920 EXACT — unchanged
        if (scaleFactor === 1) {
            scaler.style.transform = "none";
            scaler.style.width = "100%";
            document.body.style.overflowX = "auto";
            setWrapperHeight("auto");
            return;
        }

        // ✅ SCALED RANGE (1100–1919) — unchanged
        scaler.style.transform = `scale(${scaleFactor})`;
        scaler.style.transformOrigin = "top left";
        scaler.style.width = `${designWidth}px`;
        document.body.style.overflowX = "hidden";

        const updateHeight = () => {
            // 🔥 MOST STABLE METHOD — unchanged
            const contentHeight = scaler.scrollHeight;
            const scaledHeight = contentHeight * scaleFactor;
            setWrapperHeight(scaledHeight);
        };

        // 🔥 Run multiple times to ensure stability — unchanged
        requestAnimationFrame(updateHeight);
        requestAnimationFrame(() => requestAnimationFrame(updateHeight));

        const timeout1 = setTimeout(updateHeight, 100);
        const timeout2 = setTimeout(updateHeight, 300);

        // 🔥 Resize support — unchanged
        const handleResize = () => {
            requestAnimationFrame(updateHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, [minWidth, designWidth]);

    useEffect(() => {
        const cleanup = recalculate();
        return cleanup;
    }, [location.pathname, recalculate]);

    // ✅ Only addition: recalculate is now also returned
    return { scalerRef, wrapperHeight, recalculate };
};