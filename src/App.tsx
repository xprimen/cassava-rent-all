import { RouterProvider } from "react-router-dom";
import { router } from "@/lib/routers";

export default function App() {
  return <RouterProvider router={router} />;
}
