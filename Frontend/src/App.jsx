import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Toaster />
    </>
  );
}

export default App;
