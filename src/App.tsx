import { useState } from "react";

// 页面头部 - 导航栏
import NavigationBar from "./components/NavigationBar";
// 弹框表单
import DialogStayLoop from "./components/DialogStayLoop";
// 中间内容
import IndexPage from "./index/index";

// 页尾
import EndLine from "./index/end_line";
// 移动端 弹窗导航栏
import MobileDialog from "./components/MobileDialog";

const App: React.FC = () => {
  // 控制弹框- 显示/隐藏
  const [showDialog, setShowDialog] = useState(false);

  const closeDialog = () => {
    setShowDialog(false);
  };
  // 透明transparent / 黑色背景
  const [navBgc, setNavBgc] = useState("transparent");
  const beginScroll = () => {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 400) {
      setNavBgc("#2b2b2b");
    } else {
      setNavBgc("transparent");
    }
  };

  // 移动端导航栏 - 显示/隐藏
  const [collapse, setCollapse] = useState(false);

    //  onPageScroll(e) {
    //   const scrollY = e.target.scrollTop
    //   this.scrollY = scrollY
    // },

  return (
    <div
      className="App container"
      onWheel={beginScroll}
      onScroll={beginScroll}
    >
      {/* transparent */}
      <NavigationBar
        theme={"transparent"}
        show={navBgc === "transparent"}
        handlerClick={() => {
          setCollapse(!collapse);
        }}
      />
      {/* #2b2b2b */}
      <NavigationBar
        theme={"#2b2b2b"}
        show={navBgc === "#2b2b2b"}
        handlerClick={() => {
          setCollapse(!collapse);
        }}
      />

      <main className="main" id="main">
        {/* content */}
        <IndexPage />
        {/* foot */}
        <EndLine handlerClick={() => setShowDialog(true)} />
        <DialogStayLoop show={showDialog} close={closeDialog} />
        {/* 移动端导航栏 */}
        <MobileDialog show={collapse} handlerClick={() => setCollapse(false)} />
      </main>
    </div>
  );
};

export default App;
