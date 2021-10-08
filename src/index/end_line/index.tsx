// import { useState } from "react";
import "./index.scss";

/* 段落 */
type PropsType = {
  handlerClick: () => void;
};
const EndLine: React.FC<PropsType> = ({ handlerClick }) => {
  // 控制弹框- 显示/隐藏
  // const [showDialog, setShowDialog] = useState(false);
  // setShowDialog(true);
  return (
    <div className="cycan_footer">
      <div className="cycan_footer_content">
        <div className="cycan_footer_left">
          <img className="footer_logo" src="/images/logo.png" alt="" />
          <div className="icon_box">
            <img src="/images/bird.png" alt="" />
            <img src="/images/aircraft.png" alt="" />
            <img src="/images/message.png" alt="" />
          </div>
        </div>
        <div className="cycan_footer_right">
          <p>Subscribe to the newsletter to hear about</p>
          <p>Polkadot updates and events.</p>
          <span className="footer_button" onClick={() => handlerClick() }>
            Subscribe
          </span>
        </div>
      </div>
    </div>
  );
};

export default EndLine;
