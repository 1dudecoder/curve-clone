import React, { useState } from "react";
import Calculator from "../../calculator/Calculator";
import TokenModal from "../../common/tokenmodal/TokenModal";

function Main() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Calculator setModal={setModal} />
      <TokenModal setState={setModal} state={modal} />
    </div>
  );
}

export default Main;
