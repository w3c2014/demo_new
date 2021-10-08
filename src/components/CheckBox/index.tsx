// import { InputType } from "zlib";

import "./index.scss"

const CheckBox: React.FC = () => {
  const changeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    //  const newValue = e.target.value;
  };
  return (
    <p className="check_box">
      {/* <input type="checkbox" id="cbox1" > */}
      <input
        type="checkbox"
        id="cbox1"
        name={"cbox1"}
        // value={value.label}
        onChange={changeRadio}
      />
      <label
      // for="cbox1"
      >
        I agree to receive Polkadot-related communications from Web3 Foundation
        and Parity Technologies.*
      </label>
    </p>
  );
};

export default CheckBox;
