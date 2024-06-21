import React from "react";
import { PastEventData } from "./pastEventList";
import { PinContainer } from "./urlPin";
import "../../events/index.scss";

const PastEvents = () => {
  return (
    <div className="event p-40">
      <h1 className=" p-20 text-center font-['Extatica'] text-4xl font-extrabold">
        PAST EVENTS
      </h1>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-40 p-5">
        {PastEventData.map(({ id, imgLink, title, description, eventLink }) => (
          <div
            key={id}
            className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
          >
            <PinContainer title={title} href={eventLink}>
              <div className=" relative mb-5 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:w-96 lg:h-[30vh]">
                <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                  {/* bg pic */}
                  {/* <img src="" alt="bg-img" /> */}
                  <img
                    src={imgLink}
                    alt={title}
                    className="absolute z-10 transition duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {title}
              </h1>

              <p className="lg: line-clamp-2 text-xl font-light text-neutral-400 lg:font-normal">
                {description}
              </p>

              <div className="flex items-center justify-end">
                <p className="mt-2 flex text-sm text-slate-300 hover:text-red-500 md:text-xs lg:text-xl">
                  Learn More
                </p>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
