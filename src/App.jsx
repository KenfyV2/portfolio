import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { Footer, About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-primary ">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <div
          className="relative z-0 w-full min-h-screen"
          style={{
            backgroundColor: "#0c0024",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%237a33ff' fill-opacity='0.1'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <Contact />
        </div>
        <Footer />
      </div>
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;