// DAT Applications 展示的4个小方块
import ApplicationsHover from "../../components/ApplicationsHover";
import "./index.scss";

/* 段落 */
const FifthLine: React.FC = () => {
  const MobileList = [
    {
      icon: "/images/paragraph_eight/computer.png",
      texts: ["Decentralized Digital", "Assets", "Management"],
    },
    {
      icon: "/images/paragraph_eight/handbag.png",
      texts: ["Decentralized", "Digital", "Assets ETF Fund"],
    },
    {
      icon: "/images/paragraph_eight/coin.png",
      texts: ["Decentralized Digital", "Asset Quantitative", "Arbitrage Fund"],
    },
    {
      icon: "/images/paragraph_eight/snowflake.png",
      texts: ["Supply Chain DeFi", "Protocols with", "Open Consortium Chain"],
    },
  ];

  const PcList = [
    {
      icon: "/images/computer.png",
      texts: ["Decentralized Digital", "Assets", "Management"],
    },
    {
      icon: "/images/handbag.png",
      texts: ["Decentralized", "Digital", "Assets ETF Fund"],
    },
    {
      icon: "/images/gold.png",
      texts: ["Decentralized Digital", "Asset Quantitative", "Arbitrage Fund"],
    },
    {
      icon: "/images/snowflake.png",
      texts: ["Supply Chain DeFi", "Protocols with", "Open Consortium Chain"],
    },
  ];
  return (
    <div className="applications_dat_bgc">
      <p className="applications_title">DAT Applications</p>
      <p className="applications_mobile_title">The CYCAN DAT Protocol</p>

      <div className="pc_hidden">
        <ApplicationsHover list={MobileList} />
      </div>
      <div className="mobile_hidden">
        <ApplicationsHover list={PcList} />
      </div>

      {/* </div> */}
      <div className="apply_button">Apply Now</div>
    </div>
  );
};

export default FifthLine;
