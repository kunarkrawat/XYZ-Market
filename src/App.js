import Navbar from "./Components/HomePage/Navbar";
import Header from "./Components/HomePage/Header";
import HowItWorks from "./Components/HomePage/HowItWorks";
import Pricing from "./Components/HomePage/Pricing";
import Contact from "./Components/HomePage/Contact";
import About from "./Components/HomePage/About";
import classes from "./App.module.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className={classes.background}>
        <Navbar />
        <Header />
      </div>
      <About />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Toaster
        position='top-center'
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "white",
            color: "black",
          },
        }}
        reverseOrder
      />
    </>
  );
}

export default App;
