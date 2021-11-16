import React from "react";
import { FooterPartDiv, CopyBtn } from "./StyledLanding";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Copybtn from "../../assets/copy.svg";

const FooterPart = () => {
  return (
    <FooterPartDiv>
      <div>TOKEN ADDRESS: 0xd631d33f2c3f38d9abdae08ebc0b69fa636e8ec2</div>
      <CopyToClipboard text="0xd631d33f2c3f38d9abdae08ebc0b69fa636e8ec2">
        <CopyBtn>
          <div>
            <img src={Copybtn} alt="Copybtn" />
          </div>
          Copy Address
        </CopyBtn>
      </CopyToClipboard>
    </FooterPartDiv>
  );
};

export default FooterPart;
