import { Box, Button, Divider, Heading, Text } from "@chakra-ui/react";
import { Provider, useGlobalState } from "../context/BigContext";

const RealistExampleGlobalState = () => {
  return (
    <Provider>
      <Heading as="h1">Interface</Heading>
      <Divider pb={10} />
      <IWantTheUser />
      <IWantTheTasks />
    </Provider>
  );
};

export default RealistExampleGlobalState;

export const IWantTheUser = () => {
  const { incrementAge, decrementAge, user } = useGlobalState();

  console.log("IWantTheUser Re-rendered !");

  return (
    <Box pb={5}>
      <Heading as={"h2"}>User</Heading>

      <Button onClick={incrementAge}>Increment age</Button>
      <Button onClick={decrementAge}>Decrement age</Button>

      <div>
        User : {user?.name} | Age : {user?.age}
      </div>
    </Box>
  );
};

export const IWantTheTasks = () => {
  const { addTask, removeTask, tasks } = useGlobalState();

  console.log("IWantTheTasks Re-rendered !");

  return (
    <Box>
      <Heading as={"h2"}>Tasks</Heading>
      <Button onClick={addTask}>Add tasks</Button>
      <Button onClick={removeTask}>Remove tasks</Button>
      {tasks?.map((task) => (
        <Text>{task.title}</Text>
      ))}
    </Box>
  );
};
