import { useEffect } from 'react';

export function useCrosshair() {
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;

    const xEl = document.getElementById('chx');
    const yEl = document.getElementById('chy');
    const coord = document.getElementById('coord');
    if (!xEl || !yEl || !coord) return;

    let raf = null;

    const onMove = (e) => {
      const tx = e.clientX;
      const ty = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          xEl.style.top = ty + 'px';
          yEl.style.left = tx + 'px';
          xEl.style.opacity = yEl.style.opacity = coord.style.opacity = '1';
          coord.textContent =
            'X:' + String(tx).padStart(4, '0') + ' Y:' + String(ty).padStart(4, '0');
          raf = null;
        });
      }
    };

    const onLeave = () => {
      xEl.style.opacity = yEl.style.opacity = coord.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);
}
