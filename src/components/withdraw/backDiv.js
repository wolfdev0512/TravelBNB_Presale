import LandingImg from "../../assets/background.png";
import styled from "styled-components";
export const LandingDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 35px 0;
  height: 100vh;
  background: url(${LandingImg});
  background-size: 100% 100%;
`;
export const BuyBtn = styled.button`
  text-align: center;

  color: white;
  cursor: pointer;
  font-size: 20px;
  img {
    width: 31px;
  }
  div {
    width: 50px;
    height: 20px;
    background-color: #ffffff50;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  max-width: 274px;
  width: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #efe1e1;
  padding: 12px 25px;
  border-radius: 30px;
  grid-gap: 30px;
  background: #f7931e;
  transition: 0.2s linear;
  @media screen and (max-width: 768px) {
    transition: 0.2s linear;
    font-size: 20px;
  }
  @media screen and (max-width: 425px) {
    transition: 0.2s linear;
    font-size: 18px;
  }
`;
export const CommonText = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 35px;
`;
