import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const StateReRenders = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  console.log(`Component re-rendered ! state value : ${state}`);

  return (
    <>
      <Button onClick={onClick} size="lg">
        Click here
      </Button>
    </>
  );
};

export default StateReRenders;
