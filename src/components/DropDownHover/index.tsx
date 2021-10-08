

import React, { useState, useMemo, ReactNode } from "react"
import './index.scss'


// 下拉框组件
const DropDownHover: React.FC<{ value: ReactNode}> = ({ value }) => {

  // 选择的子项
  const selectList = ['Discord', 'Signal', 'Twitter', 'Telegram', 'Reddit', 'Facebook', 'Instagram', 'Linkedin'];

  const [showSelect, setShowSelect] = useState(false)

  // 鼠标开始hover至目标元素
  const hoverStart = () => setShowSelect(true)
  // 鼠标hover离开目标元素
  const hoverEnd = () => setShowSelect(false)

  // 接收传值
  const getPropsValue = useMemo(() => value, [value])

  return (
    <span
      onMouseEnter={hoverStart}
      onMouseLeave={hoverEnd}
      className="drop_down_box"
    >
      {getPropsValue}
      {showSelect && (
        <div className="select_ul_box">
          <ul className="select_ul">
            {selectList.map((children: string, key: number) => (
              <li key={key} className="select_li">
                {children}
              </li>
            ))}
          </ul>
        </div>
      )}
    </span>
  );
}

export default DropDownHover;

