import './index.scss'

  /* 段落 */
const EighthLine:React.FC = () => {
  return (
    <div className="introduce_team_bgc">
      <p className="introduce_team_title" id="Team">Our Team</p>
      <div className="introduce_team">
        <div className="introduce_team_top">
          <div>
            <p className="experience_">
              Cycan's team has a long experience in the blockchain technology
              development and financial model designs.
            </p>
            <p>
              The team has developed public chains similar to Ethereum, the
              cross-chain bridges connecting DPOS-based side chain and the
              notary network, and the open consortium chain with the rPBFT
              consensus mechanism. The team also has rich experience in smart
              contract development, including the Bancor-based decentralized
              transaction protocol, decentralized identity, distributed domain
              registration and auction, decentralized stable coin protocols,
              etc.
            </p>
          </div>
          <img className="figure_head" src="/images/figure_head.png" alt="" />
        </div>
        <div className="introduce_team_bottom">
          <img className="team_bottom_image" src="/images/jigsaw.png" alt="" />
          <div className="introduce_developers">
            <p>
              Our developers are proficient in Rust, Java, C++, Solidity, Go and
              other development languages, and familiar with the Substrate
              development framework.
            </p>
            <p className="developers_">
              The team also has extensive experiences in financial model
              designs, especially for the trust instruments and relevant model
              designs.
            </p>
            <p>
              Last but not least, the team has a consolidated architectural and
              devops experience both in the context of experimental and in
              real-world large-scale deployments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EighthLine;
