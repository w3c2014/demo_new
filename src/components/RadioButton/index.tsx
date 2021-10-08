// 单选框组件
import "./index.scss";

type ValueType = { label: string; value: string | undefined };

type PropsType = {
  name?: string;
  list: Array<ValueType>; // 动态radio
  change: (value: string | number) => void;
};

type InputTarget = {
  target: {
    value: string | number;
  };
};
const RadioButton: React.FC<PropsType> = (Props) => {
  const { name, list } = Props;

  // 切换单选框  - 触发
  const HandleChange = ({ target }: InputTarget) => Props.change(target.value);

  return (
    <div className="radio_box">
      {list.map((value: ValueType, key: number) => {
        return (
          <div key={key} className="radio_line">
            <input
              type="radio"
              name={name || "radio"}
              id={value.label}
              value={value.label}
              onChange={HandleChange}
            />
            <label htmlFor={value.label}></label>
            <span className="radio_label_text">{value.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButton;
