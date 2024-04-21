import { Outlet, getRouterContext } from "@tanstack/react-router";
import { useIsPresent, type HTMLMotionProps } from "framer-motion";
import { forwardRef, useContext, useRef } from "react";
import { motion } from "framer-motion";
import * as R from "remeda";

const transitionProps: HTMLMotionProps<"div"> = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    ease: "easeInOut",
  },
  exit: {
    opacity: 0,
  },
};

export const AnimatedOutlet = forwardRef<HTMLDivElement>((_, ref) => {
  const RouterContext = getRouterContext();

  const routerContext = useContext(RouterContext);

  const renderedContext = useRef(routerContext);

  const isPresent = useIsPresent();

  if (isPresent) {
    // use Remeda’s clone to avoid mutating the context (deep cloning)
    // for some reason structuredClone chokes
    renderedContext.current = R.clone(routerContext);
  }

  return (
    <motion.div ref={ref} {...transitionProps}>
      <RouterContext.Provider value={renderedContext.current}>
        <Outlet />
      </RouterContext.Provider>
    </motion.div>
  );
});
