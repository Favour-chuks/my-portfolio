import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import BorderAnimation from "./borderAnimation";
import BreadCrumb from "./breadcrumbs";

interface ParentProps {
  modalChildren: React.ReactElement[] | ReactElement | React.ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}
export default function Modal({
  modalChildren,
  showModal,
  setShowModal,
}: ParentProps) {
  const modalRef: any = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const observerRefValue: any = modalRef.current;
    disableBodyScroll(observerRefValue);
    return () => {
      if (observerRefValue) {
        enableBodyScroll(observerRefValue);
      }
    };
  }, []);

  return (
    <>
      {showModal && (
        <div
          ref={modalRef}
          id="modal-wrapper"
          onClick={() => {
            navigate("/");
            setShowModal(false);
          }}>
          <div
            id="module"
            onClick={(e) => e.stopPropagation()}
            className="main-content h-[80%] bg-slate-100">
            <span>
              <BorderAnimation />
            </span>
            {/* pathname */}
            <div className="sticky top-[1.3px] left-[1.5px] z-50 h-[10%] w-[calc(100%-1.5px)] text-blue-400  px-10 text-left bg-gray-100 grid items-center">
              <span>
                <BreadCrumb />
              </span>
            </div>
            <div
              style={{ position: "relative", zIndex: 0, textAlign: "center" }}
              className="px-10">
              {modalChildren}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
