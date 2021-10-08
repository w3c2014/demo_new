import BScroll, { Options } from "@better-scroll/core";
import Slide from "@better-scroll/slide";
import { useCallback, useRef } from "react";

BScroll.use(Slide);

const defaultConfig = {
  scrollX: true,
  scrollY: false,
  slide: {
    loop: true,
    threshold: 0.1, // 切换下一个或上一个 Page 的阈值。
    speed: 400, // 切换 Page 动画的默认时长。
    listenFlick: true, // 当快速轻抚过 slide 区域时，会触发切换上一页/下一页
    autoplay: false, // 是否自动播放
    interval: 5000, // 距离下一次播放的间隔
  },
  momentum: false,
  bounce: false, // bounce 值需要设置为 false，否则会在循环衔接的时候出现闪烁。
  probeType: 3,
};

export default function useScroll(config: Options = defaultConfig) {
  const scroll = useRef<BScroll>();

  const scrollRef = useCallback(
    (element: HTMLDivElement | null) => {
      if (!element) return;
      scroll.current = new BScroll(element, config);
    },
    [config]
  );

  return { scroll, scrollRef };
}
