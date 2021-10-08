import "./index.scss";

/* 段落 */
const ThirdLine: React.FC = () => {
  return (
    <div className="introduce_dat">
      <div className="introduce_dat_children">
        <img className="dat_left_image" src="/images/DAT.png" alt="" />
        <img
          className="mobile_dat_left_image"
          src="/images/mobile_Dat.png"
          alt=""
        />
        <div className="dat_right">
          <h2>What is DAT?</h2>
          <p className="mobile_hidden">
            DAT, a decentralized autonomous trust, is expected to be the major
            digital management platform in the future.
          </p>
          <p className="mobile_hidden">
            Trust is considered one of the most flexible financial tools in the
            traditional financial market. Decentralized Finance (DEFI) is
            disrupting the centralized financial system.
          </p>
          <p className="mobile_hidden">
            For example, DAT uses smart contracts instead of the traditional
            trust contracts, relies on the blockchain instead of the trustee,
            and fulfills the purpose of traditional financial institutions such
            as banks, brokerages, insurance, trust, funds, equity and bond
            trading, etc. without intermediaries.
          </p>

          <p className="mobile_show">
            The Cycan Network (CYA) is an isomorphic parachain on the Polkadot
            network. The Everlasting Parachain (ELP), as Cycan’s canary network,
            is the isomorphic parachain on the Kusama network, which is
            Polkadot’scanary network.
          </p>
          <p className="mobile_show">
            The Cycan Network aims to build a decentralized autonomous trust
            (DAT) protocol for everyone. On the Cycan Network, anyone can launch
            a DeFi project,or build an investment portfolio and participation in
            the decision-making process for any DeFi product on the network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdLine;
