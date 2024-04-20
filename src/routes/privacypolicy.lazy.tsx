import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/privacypolicy")({
  component: () => <div>Hello /privacypolicy!</div>,
});
