// 白灰呼吸三角背景：规则等边三角网格 + 浅色半透明无边框 + 呼吸（深↔浅交替，相位随机）
// 三角面按容器实际像素生成，密度恒定 → 不畸变；resize 重绘
import type { Ref } from 'vue';

interface Tri {
  pts: number[][];
  phase: number;
  mid: number;
  amp: number;
}

export function useBreathingBg(canvasRef: Ref<HTMLCanvasElement | null>) {
  let raf = 0;
  let tris: Tri[] = [];
  let W = 0;
  let H = 0;

  function build() {
    const cv = canvasRef.value;
    if (!cv) return;
    const parent = cv.parentElement;
    if (!parent) return;
    const dpr = window.devicePixelRatio || 1;
    W = parent.clientWidth;
    H = parent.clientHeight;
    if (W === 0 || H === 0) return;
    cv.width = W * dpr;
    cv.height = H * dpr;
    cv.style.width = W + 'px';
    cv.style.height = H + 'px';
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const step = 90;
    const h = (step * Math.sqrt(3)) / 2;
    tris = [];
    for (let y = -h, r = 0; y < H + h; y += h, r++) {
      const off = (r % 2) * (step / 2);
      for (let x = -step + off; x < W + step; x += step) {
        tris.push({
          pts: [
            [x, y],
            [x + step, y],
            [x + step / 2, y + h],
          ],
          phase: Math.random() * Math.PI * 2,
          mid: 0.05 + Math.random() * 0.03,
          amp: 0.025 + Math.random() * 0.03,
        });
        tris.push({
          pts: [
            [x + step / 2, y + h],
            [x + (3 * step) / 2, y + h],
            [x + step, y],
          ],
          phase: Math.random() * Math.PI * 2,
          mid: 0.05 + Math.random() * 0.03,
          amp: 0.025 + Math.random() * 0.03,
        });
      }
    }
  }

  function frame(t: number) {
    const cv = canvasRef.value;
    if (!cv || W === 0) {
      raf = requestAnimationFrame(frame);
      return;
    }
    const ctx = cv.getContext('2d');
    if (!ctx) {
      raf = requestAnimationFrame(frame);
      return;
    }
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, '#0a1626');
    g.addColorStop(1, '#08111e');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    const tt = t * 0.0006;
    for (const tri of tris) {
      const a = tri.mid + Math.sin(tt + tri.phase) * tri.amp;
      ctx.beginPath();
      ctx.moveTo(tri.pts[0][0], tri.pts[0][1]);
      ctx.lineTo(tri.pts[1][0], tri.pts[1][1]);
      ctx.lineTo(tri.pts[2][0], tri.pts[2][1]);
      ctx.closePath();
      ctx.fillStyle = `rgba(205,218,235,${Math.max(0, a)})`;
      ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  }

  onMounted(() => {
    nextTick(() => {
      build();
      raf = requestAnimationFrame(frame);
    });
  });

  // 容器尺寸变化时重建三角面
  useResizeObserver(
    () => canvasRef.value?.parentElement,
    () => build(),
  );

  onBeforeUnmount(() => {
    if (raf) cancelAnimationFrame(raf);
  });
}
