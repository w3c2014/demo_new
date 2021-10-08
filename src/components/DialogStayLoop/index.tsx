// 单选框
import RadioButton from "../RadioButton";
// 复选框
import CheckBox from "../CheckBox/index";
// 输入框
import { Input } from "../Input";
// 弹窗
import { Dialog } from "@reach/dialog";
// 弹窗样式
import "@reach/dialog/styles.css";

import "./index.scss";

type PropsType = {
  show: boolean;
  close: () => void;
};

const DialogStayLoop: React.FC<PropsType> = ({ show, close }) => {
  const closeModel = () => close();

  // 单选框数据
  const checkList = [
    {
      label: "Developer",
      value: undefined,
    },
    {
      label: "Blockchain Enthusiast",
      value: undefined,
    },
    {
      label: "Validator",
      value: undefined,
    },
  ];

  // 此处改为复选框
  const checkList_ = [
    {
      label:
        "I agree to receive Polkadot-related communications from Web3 Foundation and Parity Technologies.*",
      value: undefined,
    },
  ];

  // 单选框切换触发
  const changeRadio = () => {};

  return (
    <Dialog
      aria-label={"dialog"}
      style={{ borderRadius: "10px", zIndex: 10 }}
      isOpen={show}
      onDismiss={closeModel}
    >
      <div className="dialog_content">
        <img
          className="close_icon"
          src="/images/closeIcon.png"
          alt=""
          onClick={closeModel}
        />
        <div className="dialog_title">Stay in the loop</div>
        <p className="input_title">Email*</p>
        <Input />
        <p className="required_field">Please complete this required field.</p>
        <p className="describe_yourself">
          How would you describe yourself ? (check all that apply)
        </p>
        {/* 单选框 */}
        <RadioButton list={checkList} change={changeRadio} />
        <p className="check_prompt">
          If you would like to receive periodic updates and information you have
          requested above, please check the box below:
        </p>
        {/* 单选框 */}
        {/* <RadioButton
          name="agree_radio"
          list={checkList_}
          change={changeRadio}
        /> */}
        {/* <p style={{ margin: "0 30px" }}>
          <input
            type="checkbox"
            id="cbox1"
            name={"cbox1"}
            onChange={changeRadio}
          />
          <label>
            I agree to receive Polkadot-related communications from Web3
            Foundation and Parity Technologies.*
          </label>
        </p> */}
        <CheckBox />
        <p className="unsubscribe">
          You can unsubscribe from these communications at any time with the
          unsubscribe link provided in each communication sent to you.
        </p>
        <p className="other_explain">
          Web3 Foundation is committed to protecting and respecting your
          privacy. To see how we use your personal data please see our privacy
          policy. As noted in the privacy policy, after you fill out this form
          we (Web3 Foundation) may send you emails and other forms of
          communication from time to time regarding your interest in Polkadot,
          Kusama, Substrate and/or the Web 3.0 ecosystem. We will also share
          your information with Parity Technologies Limited (registered address
          Ignition Law, Moray House 23 - 31, Great Titchfield Street, London,
          England, W1W 7PA) as part of our cooperation in this area so that they
          can send you or assist us in sending you emails and other forms of
          communication from time to time regarding your interest in Kusama,
          Polkadot, Substrate and/or the Web 3.0 ecosystem.
        </p>
        <div className="submit_button">Submit</div>
      </div>
    </Dialog>
  );
};

export default DialogStayLoop;
