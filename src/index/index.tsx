// 段落一
import FirstLine from "./first_line";
// 段落二
import SecondLine from "./second_line";
// 段落三
import ThirdLine from "./third_line";
// 段落四
import FourthLine from "./fourth_line";
// 段落五
import FifthLine from "./fifth_line";
// 段落六
import SixthLine from "./sixth_line";
// 段落七
import SeventhLine from "./seventh_line";
// 段落八
import EighthLine from "./eighth_line";
// 段落玖 轮播图
import NinethLine from "./nineth_line";
import "./index.scss";

const IndexPage: React.FC = () => {
  return (
    <>
      {/* 段落一 */}
      <FirstLine />
      {/* 段落二 */}
      <SecondLine />
      {/* 段落三 */}
      <ThirdLine />
      {/* 段落四 */}
      <FourthLine />
      {/* 段落五 */}
      <FifthLine />
      {/* 段落六 */}
      <SixthLine />
      {/* 段落七 */}
      <SeventhLine />
      {/* 段落八 */}
      <EighthLine />
      {/* 段落九 */}
      <NinethLine />
    </>
  );
};

export default IndexPage;
