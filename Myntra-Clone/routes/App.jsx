import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../src/components/FetchItems";

function App() {

  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
