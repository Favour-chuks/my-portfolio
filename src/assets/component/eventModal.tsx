import { useEffect, useState } from "react";

interface eventOptions {
  linkTo: string;
  button: string;
}
export default function EventModal({ linkTo, button }: eventOptions) {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    button !== "" ? setShowButton(true) : setShowButton(false);
  }, []);

  return (
    <div className="h-[100%] w-[100%] absolute bg-gray-200 bg-opacity-25 backdrop-blur-sm  top-0 left-0 grid place-items-center zIndex-50">
      <div>
        {
         showButton && <a href={`${linkTo}`} target="_blank">
            <span className="w-[minmax(100px, 30%)] px-5 py-2  rounded-lg m-auto border-2 border-blue-500">
              {button}
            </span>
          </a>
        }
        
      </div>
    </div>
  );
}
