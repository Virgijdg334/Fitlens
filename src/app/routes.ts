import { createHashRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Scanner } from "./components/Scanner";
import { MachineDetails } from "./components/MachineDetails";
import { Community } from "./components/Community";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "scanner", Component: Scanner },
      { path: "machine/:id", Component: MachineDetails },
      { path: "community", Component: Community },
    ],
  },
]);