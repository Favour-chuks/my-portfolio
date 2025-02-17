import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "../scripts/modalSettings";

const svgVariants = {
  open: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: { duration: 2, ease: "easeIn" },
  },
  hide: {
    opacity: 0,
    transition: { duration: 2 },
  },
};

function BorderAnimation() {
  // to set the responsitivity of the svg animation
  const { width, height } = useWindowSize();

  return (
    <>
      <AnimatePresence>
        {width >= 1200 && (
          <motion.svg
            id={"borderanimation"}
            viewBox={`0 0 ${Math.min(width - height * 0.4)} ${Math.min(
              height * 0.64
            )}`}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              position: "absolute",
              pointerEvents: "none",
            }}
            className="z-50">
            <motion.path
              d={`M 0 0 H ${Math.min(width - height * 0.56)} V ${Math.min(
                height * 0.8
              )} H 0 Z`}
              fill="none"
              stroke="black"
              strokeWidth="2"
              variants={svgVariants}
              initial="open"
              animate="animate"
              exit="hide"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </>
  );
}

export default BorderAnimation;
