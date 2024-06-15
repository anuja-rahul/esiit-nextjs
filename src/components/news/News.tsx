import Link from "next/link";
import { newsData } from "./newsList";

export default function News() {
  return (
    <main className="flex min-h-[80vh] w-full flex-col items-center justify-center p-6">
      <h1 className="mb-12 mt-12 font-['Permanent_Marker'] text-5xl font-semibold italic md:mt-8">
        News
      </h1>

      <div className="flex flex-col items-center justify-center p-6 sm:flex-row md:gap-4">
        {newsData.map((news, idx) => (
          <div
            className="card glass mx-2 mb-6 w-[55%] md:mb-0 md:w-60"
            key={idx}
          >
            <figure>
              <img
                src={news.imgURL}
                width={250}
                alt={`news_${idx} image`}
                className="aspect-[16/9] rounded-2xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-balance text-center font-['Permanent_Marker'] text-lg font-extralight text-info-content/75 lg:text-xl">
                {news.title}
              </h2>
              <div className="flex w-full flex-row flex-wrap items-center justify-around gap-2">
                {/* <div className="badge badge-info">{news.relavance}</div> */}
                {news.relavance.map((data, dataID) => (
                  <div className="badge badge-info" key={dataID}>
                    {data}
                  </div>
                ))}
              </div>
              <p className="text-xs font-extralight lg:text-base">
                {news.description}
              </p>
              <div className="card-actions justify-end">
                <Link className="btn btn-primary" href={news.newsURL}>
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
