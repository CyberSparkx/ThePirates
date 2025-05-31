import Coins from "./Components/Coins";
import Footer from "./Components/Footer";
import Goonies from "./Components/Goonies";
import GooniesInfoGrid from "./Components/GooniesInfoGrid";
import FloatingGallery from "./Components/Layoutt";
import SpookySkull from "./Components/SpookySkull";
import Zoom from "./Components/Zoom";

const App = () => {
  return (
    <div className="bg-zinc-950 relative overflow-x-hidden">
      <div className="bg-black/20 w-full h-screen pointer-events-none fixed z-[2]"></div>
      <img src="/img/Screenshot 2025-06-01 013243.png" className="fixed z-[1] top-[40%] right-0"/>
      <Zoom />
      <Goonies/>
      <Coins/>
      <GooniesInfoGrid/>
      <SpookySkull/>
      <FloatingGallery/>
      <Footer/>
    </div>
  );
};

export default App;
