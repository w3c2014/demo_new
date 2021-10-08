import "./index.scss";

/* 段落 */
const SixthLine: React.FC = () => {
  return (
    <div className="introduce_elc">
      <p className="elc_title">What is ELC?</p>
      <p className="elc_description">
        Everlasting Cash, ELC, is an anti-inflation decentralized algorithmic
        stablecoin using Substrate with a unique reserve system, i.e. a hybrid
        of a crypto-collateralized and an algorithmic stablecoin mechanism.
      </p>
      <p className="elc_description elc_description_effect">
        As part of the Polkadot /Kusama Cross-Chain Ecosystem, ELC will be
        playing a huge role in the future DeFi market as follows:
      </p>
      <p className="elc_other_description ">
        <img src="/images/checked.png" alt="" />
        <span>
          Adopting a crypto-collateralized mechanism to ensure the basic value
          of ELC.
        </span>
      </p>
      <p className="elc_other_description">
        <img src="/images/checked.png" alt="" />
        <span>
          Using a reserve-based liquidity mining mechanism to issue additional
          ELC, ELC grows in an orderly manner with the expansion of demand.
        </span>
      </p>
      <p className="elc_other_description">
        <img src="/images/checked.png" alt="" />
        <span>
          Adopting the anti-inflation model and using the anti-inflation factor
          k to adjust the goal of ELC price control. The annual appreciation
          rate of ELC is almost the same as the inflation rate of USD.
        </span>
      </p>
      <p className="elc_other_description">
        <img src="/images/checked.png" alt="" />
        <span>
          The buffer mechanism with reserves for price falls avoids the death
          loop trap of algorithmic stablecoins.
        </span>
      </p>
    </div>
  );
};

export default SixthLine;
