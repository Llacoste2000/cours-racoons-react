import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Child from "../components/Child";

const ParentReRender = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  console.log(`Parent re-rendered ! state value : ${state}`);

  return (
    <>
      <Button onClick={onClick} size="lg">
        Click here
      </Button>

      <Child />
    </>
  );
};

export default ParentReRender;
