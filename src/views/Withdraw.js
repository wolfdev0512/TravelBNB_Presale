import React, { useState, useContext, useEffect } from "react";
import { LandingDiv, BuyBtn, CommonText } from "../components/withdraw/backDiv";
import { ToastContainer, toast } from "react-toastify";
import { travelABI } from "../contract/abi";
import getWeb3 from "../getWeb3";
import Web3 from "../context/web3";
const Withdraw = () => {
  const [balance, setBalance] = useState(0);
  const { web3, setWeb3 } = useContext(Web3);

  useEffect(() => {
    // get web3
    async function initWeb3() {
      const web3 = await getWeb3();
      setWeb3(web3);
    }
    initWeb3();
  }, []);
  // useEffect(() => {
  //   setInterval(() => {
  //     getBalance();
  //   }, 1000);
  // });
  const onWithdraw = async () => {
    if (web3) {
      const address = await web3.eth.getAccounts();

      const contract = new web3.eth.Contract(
        travelABI,
        "0x60156A5D89b3761DF7f65d5A84A4F117B9597957"
      );
      const data = await contract.methods.withdraw().send({
        from: address[0],
        value: "0",
      });
    }
  };
  const getBalance = async () => {
    if (web3) {
      const contract = new web3.eth.Contract(
        travelABI,
        "0x60156A5D89b3761DF7f65d5A84A4F117B9597957"
      );
      const data = await contract.methods
        .getCurrentBNBAmount()
        .call()
        .send({
          from: address[0],
          value: "0",
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message.response);
        });
      console.log(data);
    }
  };
  return (
    <LandingDiv>
      <CommonText>Balance</CommonText>
      <CommonText>{balance} BNB</CommonText>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BuyBtn
          onClick={() => {
            onWithdraw();
          }}
        >
          Withdraw
        </BuyBtn>
      </div>
      <ToastContainer />
    </LandingDiv>
  );
};
export default Withdraw;
