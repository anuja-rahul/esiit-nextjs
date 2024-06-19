import Carousel from "@/components/events/eventSlider/Carousel";
import "./index.scss";

export const metadata = {
  title: "ESIIT - Events",
};

export default function Events() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-transparent">
        <Carousel />
      </main>
    </>
  );
}
