import AnimatedHero from "@/components/AnimatedHero";
import "./index.scss";
import About from "@/components/About";
import News from "@/components/news/News";

export const metadata = {
  title: "ESIIT - Home",
};

export default function Home() {
  return (
    <>
      <AnimatedHero />
      <About />
      <News />
    </>
  );
}
