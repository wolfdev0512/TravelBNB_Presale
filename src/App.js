import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import LandingPage from "../src/views/LandingPage";
import Withdraw from "../src/views/Withdraw";
import "react-toastify/dist/ReactToastify.css";
import Web3 from "./context/web3";
const App = () => {
  const [web3, setWeb3] = useState(null);
  const value = useMemo(() => ({ web3, setWeb3 }), [web3]);
  return (
    <Web3.Provider value={value}>
      <Router>
        <MainContainer>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/withdraw" component={Withdraw} />
        </MainContainer>
      </Router>
    </Web3.Provider>
  );
};

export default App;

export const MainContainer = styled.div``;
