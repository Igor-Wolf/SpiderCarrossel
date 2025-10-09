import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IHeroData } from "@/interfaces/heroes";
import Link from "next/link";
import HeroPicture from "../HeroPicture";
import styles from "./framerCarousel.module.scss";

interface Iprops {
  heroes: IHeroData[];
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function FramerCarousel({ heroes }: Iprops) {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => {
      const newPage = prevPage + newDirection;
      if (newPage < 0) return [heroes.length - 1, newDirection]; // loop start
      if (newPage >= heroes.length) return [0, newDirection]; // loop end
      return [newPage, newDirection];
    });
  };

  const hero = heroes[page];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
      }}
      className={styles.externalContaeiner}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={hero.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.5 }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={`/hero/${hero.id}`}>
            <div className={styles.imageContainer}>
              <HeroPicture hero={hero} />
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      <div className={styles.textName}>{hero.name}</div>
      <button
        onClick={() => paginate(-1)}
        style={{ position: "absolute", top: "50%", left: 10, zIndex: 20 }}
      >
        ‹
      </button>
      <button
        onClick={() => paginate(1)}
        style={{ position: "absolute", top: "50%", right: 10, zIndex: 20 }}
      >
        ›
      </button>
    </div>
  );
}
