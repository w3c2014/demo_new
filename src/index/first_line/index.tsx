import './index.scss'

  /* 段落 */
const FirstLine: React.FC = () => {
  return (
    <div className="cycan_introduce">
      <img
        className="cycan_introduce_big_image"
        src="/images/cycan_introduce_bgc.png"
        alt=""
      />
      <img
        className="mobile_head_bgc"
        src="/images/mobile_head_bgc.png"
        alt=""
      />
      <div className="introduce_content">
        <img
          className="cycan_big_name"
          src="/images/cycan_big_name.png"
          alt=""
        />
        <p className="introduce_text">
          A Decentralized Autonomous Trust for Everyone
        </p>
        <p className="more_introduce_text">
          to learn more, read the <span>docs</span> or the{" "}
          <span>white paper</span> and join the community on{" "}
          <span>Telegram</span> and <span>Discord</span>
        </p>
      </div>
    </div>
  );
};

export default FirstLine;
