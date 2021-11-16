import InputField from "../../components/custom/InputField";
import React, { useState, useContext } from "react";
import {
  BuyBtn,
  CardDesc,
  CardTitle,
  FormGroup,
  SwapCardPartDiv,
} from "./StyledLanding";
import buyImg from "../../assets/buy.svg";
import { BigNumber } from "bignumber.js";
import { travelABI } from "../../contract/abi";
import { ToastContainer, toast } from "react-toastify";
import Web3 from "../../context/web3";
const SwapCardPart = () => {
  const [cntBNB, setCntBNB] = useState(0);
  const [travelBNB, setTravlBNB] = useState(0);
  const { web3 } = useContext(Web3);
  const handleChange = (e) => {
    if (e.target.name === "from") {
      setCntBNB(e.target.value);
      setTravlBNB(e.target.value * 15000);
    } else if (e.target.name === "to") {
      setTravlBNB(e.target.value);
      setCntBNB(e.target.value / 15000);
    }
  };
  const onBuy = async () => {
    if (cntBNB <= 0 || isNaN(cntBNB)) {
      toast("Please check BNB Balance!");
    }
    if (travelBNB <= 0 || isNaN(travelBNB)) {
      toast("Please check BNB Balance!");
    }

    if (cntBNB >= 0.1 || !isNaN(cntBNB)) {
      if (web3) {
        const contract = new web3.eth.Contract(
          travelABI,
          "0x95dCc60cDf89F47f36e44277Ef0f807372b55f0c"
        );

        const address = await web3.eth.getAccounts();
        console.log(address[0]);
        const data = await contract.methods
          .preSale("1500000000000000000000")
          .send({
            from: address[0],
            value: "10000000",
          })
          .on("receipt", function (receipt) {
            console.log(receipt);
          })
          .on("error", function (error) {
            console.log(error);
          });
      }
    }
  };
  return (
    <SwapCardPartDiv>
      <CardTitle>Swap</CardTitle>
      <FormGroup>
        <InputField
          value={cntBNB.toString()}
          onChange={handleChange}
          name="from"
          label="From"
          btn="BNB"
          placeholder="From"
        />
        <InputField
          value={travelBNB.toString()}
          onChange={handleChange}
          label="To"
          name="to"
          btn="TravelBNB"
          placeholder="To"
        />
      </FormGroup>
      <BuyBtn
        onClick={() => {
          onBuy();
        }}
      >
        <div>
          <img src={buyImg} alt="buyImg" />
        </div>
        BUY TravelBNB
      </BuyBtn>
      <CardDesc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla
      </CardDesc>
      <ToastContainer />
    </SwapCardPartDiv>
  );
};

export default SwapCardPart;
