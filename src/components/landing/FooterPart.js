import React from "react";
import { FooterPartDiv, CopyBtn } from "./StyledLanding";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Copybtn from "../../assets/copy.svg";

const FooterPart = () => {
  return (
    <>
      <FooterPartDiv>
        <div>TOKEN ADDRESS: 0x7Ee73dAa1d75e7D8cC21A6a432E25B455fC48A43</div>
        <CopyToClipboard text="0x7Ee73dAa1d75e7D8cC21A6a432E25B455fC48A43">
          <CopyBtn>
            <div>
              <img src={Copybtn} alt="Copybtn" />
            </div>
            Copy Address
          </CopyBtn>
        </CopyToClipboard>
      </FooterPartDiv>
      <FooterPartDiv>
        <div>CONTRACT ADDRESS: 0xC2919C37De3645e17986C5B7da0482f8A4cA30e8</div>
        <CopyToClipboard text="0xC2919C37De3645e17986C5B7da0482f8A4cA30e8">
          <CopyBtn>
            <div>
              <img src={Copybtn} alt="Copybtn" />
            </div>
            Copy Address
          </CopyBtn>
        </CopyToClipboard>
      </FooterPartDiv>
    </>
  );
};

export default FooterPart;
