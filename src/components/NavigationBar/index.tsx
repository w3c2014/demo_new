import React, { useState } from "react";

// hover
import DropDownHover from "../DropDownHover";

import "./index.scss";

type ClassType = [string, string | undefined];
type PropsType = {
  theme: string;
  show?: boolean;
  handlerClick?: () => void; // 点击右侧icon触发
};

const NavigationBar: React.FC<PropsType> = (props) => {
  const { theme, show } = props;
  // 导航栏子项
  const navList: Array<string> = [
    "Technology",
    "Documentation",
    "Team",
    "Community",
    "Wiki",
    "Contact",
  ];

  // 记录 - 导航栏当前选中项
  const [getNavKey, setNavKey] = useState(0);

  // 动态获取类名
  const getNavClass: (key: number) => ClassType = (key: number) => [
    " nav ",
    key === getNavKey ? " nav_active " : undefined,
  ];

  // 页面滚动 - 到指定位置
  const clickSlide = (address: string) => {
    const ele: any = document.getElementById(address);
    if (ele === null) return undefined;
    switch (address) {
      case "Technology":
        window.scrollTo(0, ele?.offsetTop - 100 || 0);
        break;

      case "Documentation":
        window.scrollTo(0, ele?.offsetTop - 100 || 0);
        break;
      case "Team":
        window.scrollTo(0, ele?.offsetTop + 20 || 0);
        break;
    }
  };

  return (
    <header
      className="cycan_header"
      style={{
        position: theme === "transparent" ? "absolute" : "fixed",
        backgroundColor: theme,
        top: show ? "0px" : "-120px",
        transition: "top 1s",
      }}
    >
      {/* mobile */}
      <div className="cycan_header_son">
        <img className="cycan_logo" src="/images/logo.png" alt="" />
        <img
          className="cycan_logo_right"
          src="/images/three_line.png"
          alt=""
          onClick={() => {
            props.handlerClick && props?.handlerClick();
          }}
        />
      </div>
      {/* PC */}
      <div className="nav_box">
        {navList.map((navName: string, key: number) => (
          <div key={key} className="nav_div">
            {navName === "Community" ? (
              <DropDownHover
                value={
                  <span
                    className={getNavClass(key).join(" ")}
                    onClick={() => {
                      setNavKey(key);
                    }}
                  >
                    {navName}
                  </span>
                }
              />
            ) : (
              <span
                className={getNavClass(key).join(" ")}
                onClick={() => {
                  clickSlide(navName);
                  setNavKey(key);
                }}
              >
                {navName}
              </span>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default NavigationBar;
