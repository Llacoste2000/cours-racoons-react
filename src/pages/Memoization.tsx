import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Memoization = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  const onClick1 = () => {
    setState1(state1 + 1);
  };
  const onClick2 = () => {
    setState2(state2 + 1);
  };

  console.log(`Parent re-rendered ! state value : ${state1}`);

  return (
    <>
      <Button onClick={onClick1} size="lg">
        State 1
      </Button>
      <Button onClick={onClick2} size="lg">
        State 2
      </Button>

      <Child value={state1} />
      <MemoizedChild value={state1} />
    </>
  );
};

export default Memoization;

const Child = React.memo(({ value }: { value: number }) => {
  console.log("Child re-render of the child");

  return <></>;
});
const MemoizedChild = React.memo(({ value }: { value: number }) => {
  console.log("Memoized child re-render of the child");

  return <></>;
});
