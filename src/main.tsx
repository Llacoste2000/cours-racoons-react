import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContextReRender from "./pages/ContextReRender";
import Memoization from "./pages/Memoization";
import ParentReRender from "./pages/ParentReRender";
import RealistExample from "./pages/RealistExample";
import RealistExampleGlobalState from "./pages/RealistExampleGlobalState";
import RealistExampleGlobalStateSolution from "./pages/RealistExampleGlobalStateSolution";
import RealistExampleSolution from "./pages/RealistExampleSolution";
import StateReRenders from "./pages/StateReRenders";

const router = createBrowserRouter([
  {
    path: "/use-state",
    element: <StateReRenders />,
  },
  {
    path: "/parent-render",
    element: <ParentReRender />,
  },
  {
    path: "/realist-ex",
    element: <RealistExample />,
  },
  {
    path: "/realist-ex-solution",
    element: <RealistExampleSolution />,
  },
  {
    path: "/context",
    element: <ContextReRender />,
  },
  {
    path: "/realist-ex-global-state",
    element: <RealistExampleGlobalState />,
  },
  {
    path: "/realist-ex-global-state-solution",
    element: <RealistExampleGlobalStateSolution />,
  },
  {
    path: "/memoization",
    element: <Memoization />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>,
);
