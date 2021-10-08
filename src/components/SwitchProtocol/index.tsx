import React from "react";
import "./index.scss";

const SwitchProtocol: React.FC = () => {
  return (
    <>
      <div className="switch_protocol">
        <ul className="protocol_touch_ul">
          <li>DTGP</li>
          <li className="active_">DACP</li>
          <li>DAMP</li>
          <li>DMP</li>
        </ul>

        <div className="protocol_description">
          <div className="description_left">
            <div className="ball">DACP</div>
            <p className="ball_description">
              A decentralized digital assets custody protocol
            </p>
          </div>

          <div className="description_right">
            <h2>What is DACP?</h2>
            <p>
              <span>Decentralized Digital Assets Custody Protocol, DACP,</span>
              makes decentralized custody of digital assets a reality. With
              smart contract, investors’ assets are safely kept in custody.
              Nobody could mobilize the assets unless with the approval of DTGP
              and DAMP.
            </p>
          </div>
        </div>
      </div>

      <div className="mobile_description_bottom">
        <p className="problem">What is DACP?</p>
        <p className="description">
          <span>Decentralized Digital Assets Custody Protocol, DACP, </span>
          makes decentralized custody of digital assets a reality. With smart
          contract, investors’ assets are safely kept in custody. Nobody could
          mobilize the assets unless with the approval of DTGP and DAMP.
        </p>
      </div>
    </>
  );
};

export default SwitchProtocol;
