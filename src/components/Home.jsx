import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Home = () => {
  return(
    <div className="w-full flex flex-col">
      <Nav />
      <div className="w-full flex flex-col justify-center">
        <main className="home_sub_pages">
            <Outlet/>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;