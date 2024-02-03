import "./App.css";
import Image from "./components/Image";
import Logo from "./assets/logo-light.png";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Paragrapg from "./components/Paragrapg";

function App() {
  return (
    <div className=" max-w-screen-xl mx-auto ">
      <Image url={Logo} altText="Logo" style="w-28 bg-black" />

      <Heading as="h2" iconaligment="right" style=" mb-10  font-semibold text-7xl" text="USA." />
    
      <Button text="Click here!" link="/" style="px-4 text-white py-2 rounded-xl bg-green-500  " iconaligment="both" />

      <Paragrapg style="font-semibold text-xl mt-10" text="React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is widely used for creating interactive and dynamic web applications. React allows developers to create reusable UI components and efficiently manage the state of their applications." />
    </div>
  );
}

export default App;
