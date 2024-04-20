import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/games")({
  component: () => <GamesRoute />,
});

function GamesRoute() {
  return (
    <div className="mx-auto flex h-auto min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-x-4 py-20 lg:h-[80vh] lg:min-h-0 lg:flex-row lg:items-start">
      <section className="flex h-[640px] w-[960px] flex-col items-center gap-y-8 overflow-hidden p-5 shadow-lg"></section>
    </div>
  );
}
