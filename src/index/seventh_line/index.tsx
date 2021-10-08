import './index.scss'

  /* 段落 */
const SeventhLine: React.FC = () => {
  return (
    <div className="whitepaper_documentation" id="Documentation">
      <img
        className="whitepaper_bgc"
        src="/images/psychedelic_wings.png"
        alt=""
      />
      <div className="whitepaper_documentation_center">
        <div className="message_left">
          <span>Documentation</span>
          <span>Whitepaper</span>
        </div>
        <div className="message_right">
          <div className="download_button download_button_active">
            <span>CYCAN</span>
            <img src="/images/download.png" alt="" />
          </div>
          <div className="download_button">
            <span>CYCAN</span>
            <img src="/images/download.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhLine;
