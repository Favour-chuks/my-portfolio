import { Dispatch, SetStateAction } from "react";
import MenuButton from "../component/menuButton";
import { motion } from "framer-motion";
import FooterIcon from "../component/footericon";

interface modal {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}
const gridVariant = {
  initial: {},
  final: {},
};
export default function HomePage({ setShowModal }: modal) {
  return (
    <motion.section
      variants={gridVariant}
      initial="initial"
      animate="final"
      id="grid-container"
      className="grid h-[100vh] grid-cols-[25%_minmax(0,_1fr)_100px] grid-rows-[100px_minmax(0,_1fr)_100px] bg-slate-100">
      {/* navigation section  */}
      <section className="section-container px-5 py-7 content-center">
        <h1
          id="name"
          className="col-start-1 col-span-4 font-semibold text-3xl content-center">
          Favour Chuks Okolo
        </h1>
      </section>
      {/* place holder section  */}
      <section className="section-container"></section>
      {/* menu section  */}
      <section className="section-container px-5 py-5 place-content-center">
        <MenuButton setShowModal={setShowModal} showModal={false} />
      </section>

      {/* content section  */}
      {/* sider  */}
      <section className="section-container px-5 py-7 content-center">
        <p className="leading-7 tracking-tighter w-[60%] text-3xl font-extralight text-gray-400">
          Hi, im a <span className="hover:underline">software developer</span>{" "}
          with a quirky sense of humor and a deep passion for coding.
        </p>
      </section>
      {/* main content  */}
      <section className="main-content section-container overflow-scroll overflow-x-hidden snap-proximity snap-y">
        {/* <Slideshow /> */}
      </section>
      <section className="section-container"></section>

      {/* footer section  */}
      <section className="section-container"></section>
      {/* contact details  */}

      <section className="section-container pl-2 grid place-items-center">
      <FooterIcon />
        <section className="content mr-7 self-center ">
          
        </section>
        
      </section>
      <section className="section-container"></section>
    </motion.section>
  );
}
