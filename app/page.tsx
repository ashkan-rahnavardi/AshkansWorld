import About from "./_components/about";
import Contact from "./_components/contact";
import CustomCursor from "./_components/_cursor/index";
import NavBar from "./_components/navbar";
import Start from "./_components/start";
import Work from "./_components/work";
// import Work from "./_components/work-old";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <NavBar />
      <Start />
      <Work />
      <About />
      <Contact />
    </>
  );
}
