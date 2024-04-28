import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Page404 from "../components/NotFound";

export const Route = createLazyFileRoute("/game/$game")({
  component: () => <GameRoute />,
});

function GameRoute() {
  const { game } = Route.useParams();

  const [isGameEnabled, setIsGameEnabled] = useState(false);

  // hacky way to tell if game exists by attempting to fetch the game’s index file
  // better way to do things would be to not use react router and just use fetch,
  //  or useLoader for parallel requests with rendering
  const gameExistsQuery = useQuery({
    queryKey: [game],
    queryFn: async () => {
      const req = await fetch(`/uploads/${game}/index.html`);
      const text = await req.text();
      console.log("text", text);
      console.log(req.ok && text.includes("pythons.js"));
      return req.ok && (text.includes("pythons.js") || text.includes("canvas"));
    },
  });

  return (
    <>
      {gameExistsQuery.status === "success" && !gameExistsQuery.data && (
        <Page404 />
      )}
      {!(gameExistsQuery.status === "success" && !gameExistsQuery.data) && (
        <div className="mx-auto flex h-auto min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-x-4 py-20 lg:h-[80vh] lg:min-h-0 lg:flex-row lg:items-start">
          <section className="relative flex h-[640px] w-[960px] flex-col items-center gap-y-8 overflow-hidden p-5 shadow-lg">
            {gameExistsQuery.status === "pending" && <h1>Loading...</h1>}
            {!isGameEnabled &&
              gameExistsQuery.status === "success" &&
              gameExistsQuery.data && (
                <div className="relative h-full w-full border-2">
                  <button
                    onClick={() => setIsGameEnabled(true)}
                    className="absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 rounded-lg px-4 py-2 text-xl lg:text-3xl"
                  >
                    Play Now
                  </button>
                </div>
              )}
            {isGameEnabled && (
              <iframe
                src={`/uploads/${game}/index.html`}
                className="h-full w-full"
              />
            )}
          </section>
        </div>
      )}
    </>
  );
}
