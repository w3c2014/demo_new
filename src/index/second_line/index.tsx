import "./index.scss";

/* 段落二 */
const SecondLine: React.FC = () => {
  return (
    <>
      {/* 第一小节 */}
      <div className="cycan_netWok" id="cycan_netWok">
        <div className="cycan_netWok_left">
          <h2>What is Cycan Network?</h2>
          <p>
            <span>The Cycan Network (CYA)</span> is an isomorphic parachain on
            the Polkadot network. The Everlasting Parachain (ELP), as Cycan’s
            canary network, is the isomorphic parachain on the Kusama network,
            which is Polkadot’scanary network.
          </p>
          <p>
            The Cycan Network aims to build a decentralized autonomous trust
            (DAT) protocol for everyone. On the Cycan Network, anyone can launch
            a DeFi project, or build an investment portfolio and participation
            in the decision-making process for any DeFi product on the network.
          </p>
        </div>
        <div className="cycan_netWok_right">
          <img src="/images/introduce_second.png" alt="" />
        </div>
      </div>

      {/* 第二小节 */}
      <div className="paragraph_title" id="Technology">
        Technology
      </div>
      <div className="how_works">
        <div className="how_works_left">
          <img src="/images/shield.png" alt="" />
        </div>
        <div className="how_works_right">
          <h2>How Cycan works</h2>
          <p>
            The Cycan Network and Everlasting Parachain share the same NPOS
            consensus mechanism as the Polkadot network.
          </p>
          <p>
            With the integration of <span>EVM</span> and <span>WASM</span> ,
            developers can develop <span>DeFi</span> smart contracts based on
            the Cycan Network, or build the <span>Polkadot</span>-based
            isomerous consortium chain or cross-chain bridge, so that the
            cross-chain digital assets can enter the Polkadot system through the
            consortium chain.
          </p>
          <p>
            On the Cycan Network, developers can create DeFi projects based on
            native crypto assets, or based on digital assets from other
            non-crypto industries.
          </p>
        </div>
      </div>

      {/* 第三小节 */}
      <div className="infrastructure_introduce">
        <div className="infrastructure_introduce_left">
          <h2 className="mobile_hidden_title">What is Cycan Network?</h2>
          <h2 className="mobile_title">Cycan’s DeFi Infrastructure</h2>
          <p>
            Cy-up is the Micro Reward System based on Time Series, in which
            rewards are given based on users’ behaviors and mining activities,
            following the rule that "investor is shareholder" and “user is the
            shareholder". For example, the earlier users start using the
            network, more rewards they could receive.
          </p>
          <p>
            Cy-cds is the Decentralized Credit Default Swap Protocol. It
            provides blockchain-based decentralized insurance for bond-type
            financial products.
          </p>
          <p>
            Cy-swap is the Decentralized Exchange on Cycan Network. Cy-pos is
            the POS Mining Proxy on Cycan Network.
          </p>
        </div>
        <div className="infrastructure_introduce_right">
          <img src="/images/flow_ball.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default SecondLine;
