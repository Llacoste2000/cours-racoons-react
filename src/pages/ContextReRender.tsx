import { Button, Text } from "@chakra-ui/react";
import { Provider, useValue } from "../context/ContextSimple";

const ContextReRender = () => {
  console.log("main component render !");

  return (
    <Provider>
      <ChildWithContext n={1} />
      <ChildWithContext n={2} />
      <ChildWithContext n={3} />
      <ChildWithContext n={4} />
    </Provider>
  );
};

export default ContextReRender;

export const ChildWithContext = ({ n }: { n: number }) => {
  const { onClick, value } = useValue();

  console.log(`Child ${n} re-rendered ! context value : ${value}`);

  return (
    <>
      <Button onClick={onClick} size="lg">
        Child {n}
      </Button>
    </>
  );
};

export const ChildWithoutContext = () => {
  console.log(`Child without context re-rendered !`);

  return (
    <>
      <Button onClick={() => console.log("hehe")} size="lg">
        Child No Context
      </Button>
    </>
  );
};
