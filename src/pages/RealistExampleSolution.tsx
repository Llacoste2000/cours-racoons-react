import { Button } from "@chakra-ui/react";
import { useState } from "react";

const RealistExampleSolution = () => {
  console.log(`Parent re-rendered !`);

  return (
    <>
      <MyComponent />
      <VerySlowComponent />
    </>
  );
};

export default RealistExampleSolution;

const VerySlowComponent = () => {
  let n = 2000000000,
    a = 0,
    b = 1,
    c = n;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  console.log("Finished re-render of slow component ! xd");

  return <div>VerySlowComponent</div>;
};

const MyComponent = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  console.log(`MyComponent re-rendered ! state value : ${state}`);

  return (
    <>
      <Button onClick={onClick} size="lg">
        Click here
      </Button>
    </>
  );
};
