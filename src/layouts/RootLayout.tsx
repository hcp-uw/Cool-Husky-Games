import {
  ScrollRestoration,
  useMatch,
  useMatches,
} from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import { AnimatedOutlet } from "../components/AnimatedOutlet";
import Page404 from "../components/NotFound";
import Footer from "../components/Footer";

export default function RootLayout() {
  const matches = useMatches();
  const match = useMatch({ strict: false });
  const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
  const nextMatch = matches[nextMatchIndex];

  // Handle new page not being found in the page list (doesn't exist)
  if (!nextMatch) {
    return <Page404 />;
  }

  return (
    <>
      <Navbar key={"navbar"} />
      <div className="max-w-screen h-fit min-h-screen overflow-x-hidden bg-[#39275B] text-white">
        <ScrollRestoration getKey={(location) => location.pathname} />
        <AnimatePresence mode="popLayout">
          <AnimatedOutlet key={nextMatch.id} />
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
