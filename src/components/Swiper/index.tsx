import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";
import "./index.scss";
import useScroll from "../../hooks/useScroll";

BScroll.use(Slide);

// 用于pc显示的子ui
const PcSwiperChild = () => {
  return (
    <div className="swiper_children_box">
      <div className="swiper_children">
        <div className="image_box">
          <img src="/images/swiper_children.png" alt="" />
          <p className="hover_hint">
            Enjin, the co-creator of the ERC-1155token standard, is launching two scaling solutions
            to remove gas and support fungible and non-fungible tokens (NFTs) from any blockchain:
            JumpNet, launching on April 6, and Efinity, launching later in 2021.
          </p>
        </div>

        <p className="swiper_children_des">
          <span>Enjin Is Launching Two Scaling</span>
          <span>Solutions to Remove Gas and</span>
          <span>Support NFTs from Any</span>
        </p>
      </div>
    </div>
  );
};

// 移动端显示的子ui
const MobileChild = () => {
  return (
    <div className="mobile_children_box">
      <div className="mobile_children_image">
        <img src="/images/other.png" alt="" />
      </div>
      <p className="children_des_top">
        Enjin Is Launching Two Scaling Solutions to Remove Gas and Support NFTs from Any
      </p>
      <p className="children_des_bottom">
        Enjin, the co-creator of the ERC-1155token standard, is launching two scaling solutions to
        remove gas and support fungible and non- fungible tokens (NFTs)
      </p>
    </div>
  );
};

const SwiperDemo = () => {
  const { scroll, scrollRef } = useScroll();

  const nextPage = () => {
    scroll.current?.next();
  };
  const prePage = () => {
    scroll.current?.prev();
  };

  return (
    <div className="swiper_box">
      <MobileChild></MobileChild>
      <MobileChild></MobileChild>
      <img
        className="slide_left_button"
        src="/images/slide_button.png"
        alt=""
        onClick={() => nextPage()}
      />
      <img
        className="slide_right_button"
        src="/images/slide_button.png"
        alt=""
        onClick={() => prePage()}
      />
      <div ref={scrollRef} id="wrapper" className="scroll-warpper" style={{ overflow: "hidden" }}>
        <div className="scroll-content">
          <div>
            <PcSwiperChild />
            <PcSwiperChild />
          </div>
          <div>
            <PcSwiperChild />
            <PcSwiperChild />
          </div>
          <div>
            <PcSwiperChild />
            <PcSwiperChild />
          </div>
          <div>
            <PcSwiperChild />
            <PcSwiperChild />
          </div>
          <div>
            <PcSwiperChild />
            <PcSwiperChild />
          </div>
          <div>
            <PcSwiperChild />
            <PcSwiperChild />
          </div>
          <div>
            <PcSwiperChild />
            <PcSwiperChild />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperDemo;
