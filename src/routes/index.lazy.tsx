import { Link, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function GetTopPicks() {
  const picks = [
    {
      id: "snake",
      name: "Husky Snake",
      authors: "Aaditya, Anthony",
      img: "/snake.png",
    },
    {
      id: "pong",
      name: "Husky Pong",
      authors: "Siddharth, Yueheng",
      img: "/pong.png",
    },
    {
      id: "wordle",
      name: "Husky Wordle",
      authors: "Aaditya",
      img: "/tictactoe.png",
    },
  ];

  return picks;
}

function Index() {
  const topPicks = GetTopPicks();

  return (
    <>
      <div className="mx-auto flex h-auto min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-x-4 lg:h-[100vh] lg:min-h-0 lg:flex-row lg:items-start 2xl:h-[80vh]">
        <section className="mx-auto flex h-full flex-col justify-center px-5">
          <h3 className="text-lg lg:text-xl 2xl:text-2xl">
            Beta Version 0.1 now out!
          </h3>
          <h1 className="py-4 text-xl tracking-tight lg:text-3xl xl:text-5xl">
            Think your favorite classic games, but{" "}
            <span className="font-bold">
              reimagined for <span className="text-[#FFC700]">Huskies.</span>
            </span>
          </h1>
          <p className="text-xl lg:text-2xl">
            Bringing games you know and love such as Snake and Pong to the
            comfort and speed of your browser.
          </p>
          <Link className="mt-6 w-fit rounded-lg" to="/games">
            <button className="h-12 w-36 rounded-lg bg-[#E8E3D3] text-black transition-all duration-300 hover:bg-opacity-80">
              Get Started &rarr;
            </button>
          </Link>
        </section>
        <section className="my-auto hidden flex-col justify-center lg:flex">
          <img
            className="aspect-auto h-64 w-48 lg:h-72 lg:w-72 xl:h-[512px] xl:w-[649px]"
            src="/hero.png"
            alt="Game Image for Hero Section"
            width={512}
            height={649}
          />
        </section>
      </div>
      <div className="mx-10 flex h-auto min-h-screen w-full max-w-7xl flex-col justify-center gap-x-4 md:mx-16 lg:h-[100vh] xl:mx-auto 2xl:h-[80vh]">
        <div className="flex max-w-7xl flex-row">
          <div className="flex w-1/2 flex-col gap-y-6 2xl:gap-y-16">
            <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl 2xl:text-6xl">
              What are Cool Husky Games?
            </h1>
            <p className="w-full max-w-4xl text-base font-normal leading-9 text-white md:text-lg md:leading-9 xl:text-xl 2xl:text-2xl">
              Step into the pixelated world of Cool Husky Games, where nostalgia
              meets purple and gold pride! Rediscover the classics you love,
              reimagined with a spirited University of Washington twist. Whether
              you're a lifelong Husky fan or just love a good retro challenge,
              Cool Husky Games offers a unique and unforgettable gaming
              experience.
            </p>
          </div>
          <img
            className="max-w-1/2 mx-auto hidden lg:block"
            src="/description.png"
            alt="Husky Image"
            width={421}
            height={242}
          />
        </div>
        <div className="flex flex-col gap-y-6 2xl:gap-y-16">
          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl 2xl:text-6xl">
            Top Gaming Picks &rarr;
          </h1>
          <div className="flex w-full flex-col gap-x-4 md:gap-y-8 lg:flex-row xl:gap-y-12 2xl:gap-y-16">
            {topPicks.map((pick) => (
              <Link
                to={`/game/$game`}
                params={{ game: pick.id }}
                className="relative h-[260px] w-[371px] overflow-clip rounded-lg hover:cursor-pointer"
                key={pick.name}
              >
                <div className="absolute z-[1] h-full w-full bg-gradient-to-t from-black/70 from-10% to-transparent to-50% hover:to-100%"></div>
                <img
                  className="absolute"
                  src={pick.img}
                  alt={pick.name}
                  style={{ objectFit: "fill" }}
                />
                <div className="absolute bottom-5 z-[2] ml-4">
                  <h1 className="text-3xl">{pick.name}</h1>
                  <h2 className="text-lg text-white/80">{pick.authors}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
