import Carousel from "@/components/events/eventSlider/Carousel";
import "./index.scss";
import PastEvents from "@/components/events/pastEvents/PastEvents";

export const metadata = {
  title: "ESIIT - Events",
};

export default function Events() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-transparent">
        <Carousel />
        <PastEvents />
      </main>
    </>
  );
}
