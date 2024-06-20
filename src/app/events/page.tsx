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
        <div className="w-full">
          <Carousel />
        </div>
        <h1 className="pt-40 font-['Extatica'] text-4xl font-extrabold">
          PAST EVENTS
        </h1>
        <PastEvents />
      </main>
    </>
  );
}
