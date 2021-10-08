

// 轮播图d
import SwiperComponent from "../../components/Swiper";

import "./index.scss";

  /* 段落 */
const FirstLine: React.FC = () => {
  return (
    <div className="latest_news">
      <div className="content_top">
        <span className="content_top_title">Latest news</span>
        <div className="content_top_button">
          <span>more</span>
          <img src="/images/right_button.png" alt="" />
        </div>
      </div>

      <SwiperComponent />
    </div>
  );
};

export default FirstLine;
