import { Dispatch, SetStateAction, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface modalState {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
}

export default function MenuButton({ setShowModal, showModal }: modalState) {
  const [animate, cycleAnimation] = useCycle(
    { opacity: 0, width: "100px" },
    { opacity: 1, width: "100vw" }
  );

  const location = useLocation();

  const openSideNav = () => {
    !showModal ? cycleAnimation() : null;
  };
  useEffect(openSideNav, [location]);
  return (
    <div>
      <span className="openbtn" onClick={openSideNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50px"
          viewBox="0 -960 960 960"
          width="50px"
          fill="#0101010">
          <path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z" />
        </svg>
      </span>
      <motion.div
        id="mySidepanel"
        className="sidepanel"
        initial={false}
        animate={animate}
        transition={{
          opacity: { duration: 0.5 },
          width: { duration: 0.5, delay: animate.opacity ? 0.1 : 0.1 },
        }}
        exit={animate}>
        <a
          href="#"
          className="closebtn"
          onClick={() => {
            cycleAnimation();
          }}>
          &times;
        </a>

        <div className="overlay-content">
          <Link
            className="menulink"
            to="/about"
            state={{ previousLocation: location }}
            onClick={() => {
              setShowModal(true);
            }}>
            About
          </Link>

          <Link
            className="menulink"
            to="/projects"
            state={{ previousLocation: location }}
            onClick={() => {
              setShowModal(true);
            }}>
            Skills/Tools
          </Link>

          <HashLink
            className="menulink"
            to="/projects/#portfolio"
            state={{ previousLocation: location }}
            onClick={() => {
              setShowModal(true);
            }}>
            Projects
          </HashLink>

          <HashLink
            className="menulink"
            to="/about/#contact"
            onClick={() => {
              setShowModal(true);
            }}
            state={{ previousLocation: location }}>
            Contact
          </HashLink>

          <HashLink
            className="menulink"
            to="/about/#videos"
            onClick={() => {
              setShowModal(true);
            }}
            state={{ previousLocation: location }}>
            Videos
          </HashLink>
        </div>
      </motion.div>
    </div>
  );
}
