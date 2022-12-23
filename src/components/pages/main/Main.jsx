import React, { useState } from "react";
import Calculator from "../../calculator/Calculator";
import TokenModal from "../../common/tokenmodal/TokenModal";
import Sidebar from "../../sildebar/Sidebar";

import dai from "../../../assets/token-icon/dai.svg";
import usdt from "../../../assets/token-icon/usdt.svg";
import usdc from "../../../assets/token-icon/usdc.svg";
import wbtc from "../../../assets/token-icon/wbtc.svg";
import par from "../../../assets/token-icon/dai.svg";

function Main({
  isConnected, setIsConnected
}) {
  const [modal, setModal] = useState(false);

  const [firstItem, setFirstItem] = useState({
    name: "DAI",
    image: dai,
  });

  const [secItem, setSecItem] = useState({
    name: "USDT",
    image: usdt,
  });

  const [clickedOne,setClickedOne] = useState("");

  console.log("clickedone",clickedOne)

  return (
    <div>
      <Calculator setModal={setModal} firstItem={firstItem}
       secItem={secItem} setClickedOne={setClickedOne} clickedOne={clickedOne}
      />
      <TokenModal setState={setModal} state={modal} setFirstItem={setFirstItem} setSecItem={setSecItem} clickedOne={clickedOne}  />
      <Sidebar />
    </div>
  );
}

export default Main;
