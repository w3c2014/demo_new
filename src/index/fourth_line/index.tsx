// 可切换的 - 协议展示
import SwitchProtocol from "../../components/SwitchProtocol";
import "./index.scss";

/* 段落 */
const FourthLine: React.FC = () => {
  return (
    <>
      <div className="protocol_introduce_title">The CYCAN DAT Protocol</div>
      {/* 可切换的 - 协议展示 */}
      <SwitchProtocol></SwitchProtocol>
    </>
  );
};

export default FourthLine;
