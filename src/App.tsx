import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import HomePage from "./assets/pages/home";
import Modal from "./assets/component/modal";
import About from "./assets/pages/about";
import Portfolio from "./assets/pages/portfolio";
import { useState } from "react";

function App() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" element={<HomePage setShowModal={setShowModal} />} />
        <Route
          path="/projects"
          element={
            <Modal
              setShowModal={setShowModal}
              showModal={showModal}
              modalChildren={<Portfolio />}
            />
          }
        />
        <Route
          path="/about"
          element={
            <Modal
              setShowModal={setShowModal}
              showModal={showModal}
              modalChildren={<About />}
            />
          }
        />
      </Routes>
      {previousLocation && (
        <Routes>
          <Route
            path="/about"
            element={
              <Modal
                setShowModal={setShowModal}
                showModal={showModal}
                modalChildren={<About />}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Modal
                setShowModal={setShowModal}
                showModal={showModal}
                modalChildren={<Portfolio />}
              />
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
