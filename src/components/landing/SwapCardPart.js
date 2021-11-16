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
    if (cntBNB < 0.1 && cntBNB > 0) {
      toast("Min balance is 0.1");
    }
    if (cntBNB > 5) {
      toast("Max balance is 5");
    }

    if (cntBNB >= 0.1 && cntBNB <= 5) {
      if (web3) {
        const contract = new web3.eth.Contract(
          travelABI,
          "0xC2919C37De3645e17986C5B7da0482f8A4cA30e8"
        );
        const address = await web3.eth.getAccounts();
        await contract.methods
          .preSale(await web3.utils.toWei(travelBNB.toString(), "ether"))
          .send({
            from: address[0],
            value: await web3.utils.toWei(cntBNB.toString(), "ether"),
          })
          .on("receipt", function (receipt) {
            toast("Success!");
          })
          .on("error", function (error) {
            toast(error);
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
