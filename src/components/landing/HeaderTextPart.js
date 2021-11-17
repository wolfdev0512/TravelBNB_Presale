import React, { useState, useEffect, useContext } from "react";
import {
  ConnectWalletBtn,
  HeaderResponsiveTitle,
  HeaderTextPartDiv,
  HeaderTitle,
  HeaderTitleDiv,
  TravelBNBBtn,
} from "./StyledLanding";
import travelBtn from "../../assets/TravelBNBBtn.svg";
import metaImg from "../../assets/metamask.svg";
import getWeb3 from "../../getWeb3";
import Web3 from "../../context/web3";

const HeaderTextPart = () => {
  const [useraccount, setUserAccount] = useState("");
  const { setWeb3 } = useContext(Web3);
  useEffect(() => {
    // get web3
    async function initWeb3() {
      const web3 = await getWeb3();
      setWeb3(web3);
      const accounts = await web3.eth.getAccounts();
      setUserAccount(accounts[0]);
    }
    initWeb3();
  }, []);
  const onWalletConnect = async () => {
    const web3 = await getWeb3();
    setWeb3(web3);
    const accounts = await web3.eth.getAccounts();
    setUserAccount(accounts[0]);
  };
  return (
    <HeaderTextPartDiv>
      <HeaderTitleDiv>
        <TravelBNBBtn>
          <img src={travelBtn} alt="travelBtn" />
        </TravelBNBBtn>
        <HeaderTitle>
          <div className="main_title">Buy TravelBNB</div>
          <div className="sub_title">
            MIN BUY: 0.1 BNB / MAX BUY: 5 BNB (+GAS FEE)
          </div>
        </HeaderTitle>
        <ConnectWalletBtn
          onClick={() => {
            onWalletConnect();
          }}
        >
          <div>
            <img src={metaImg} alt="metaImg" />
          </div>

          {useraccount
            ? `${useraccount.slice(0, 6)}...${useraccount.slice(
                useraccount.length - 4,
                useraccount.length
              )}`
            : "Connect Wallet"}
        </ConnectWalletBtn>
      </HeaderTitleDiv>
      <HeaderResponsiveTitle>
        <div className="main_title">Buy TravelBNB</div>
        <div className="sub_title">
          MIN BUY: 0.1 BNB / MAX BUY: 5 BNB (+GAS FEE)
        </div>
      </HeaderResponsiveTitle>
    </HeaderTextPartDiv>
  );
};

export default HeaderTextPart;
