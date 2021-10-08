import { useState } from "react";
// 弹窗
import { Dialog } from "@reach/dialog";
// 弹窗样式
import "@reach/dialog/styles.css";
import "./index.scss"

type PropsType = {
  show: boolean;
  handlerClick: () => void;
};
const MobileDialog: React.FC<PropsType> = ({ show, handlerClick }) => {
  // true展开/ false收起
  const [arrow, setArrow] = useState(false);
  // const [collapse, setCollapse] = useState(false);
  return (
    <Dialog
      aria-label={"dialog"}
      style={{ borderRadius: "10px", zIndex: 10 }}
      isOpen={show}
      onDismiss={() => {
        handlerClick();
      }}
    >
      <div
        className={`" collapse "  ${
          show ? "collapse_show" : "collapse_hidden"
        } `}
      >
        <div className="collapse-cell">Technology</div>
        <div className="collapse-cell">Documentation</div>
        <div className="collapse-cell">Team</div>
        <div className="collapse-cell">
          <div>
            <span>Community</span>
            <div
              className={`" collapse_son "  ${
                arrow ? "collapse_son_show" : "collapse_son_hidden"
              } `}
            >
              <div>Linkedin</div>
              <div>Twitter</div>
              <div>Telegram</div>
            </div>
          </div>
          <img
            src="/images/arrow_bottom.png"
            alt=""
            className={arrow ? "arrow_bottom" : "arrow_top"}
            onClick={() => {
              setArrow(!arrow);
            }}
          />
        </div>
        <div className="collapse-cell">Contact</div>
      </div>
    </Dialog>
  );
};

export default MobileDialog;
