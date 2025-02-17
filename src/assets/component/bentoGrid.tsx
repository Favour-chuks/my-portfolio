import { useState } from "react";
import EventModal from "./eventModal";

interface bentoGridOptions {
  portfolioColor: string;
  projectTitle: string;
  projectIcon: string;
  projectLink: string;
  codeLink: string;
  portfolioDescription: string;
  projectImgDesktop: string;
  projectImgMobile: string;
}

function BentoGrid({
  portfolioColor,
  projectTitle,
  projectIcon,
  projectLink,
  codeLink,
  portfolioDescription,
  projectImgDesktop,
  projectImgMobile,
}: bentoGridOptions) {
  const [showEvent, setShowEvent] = useState(false);
  const sectionColor = portfolioColor !== "" ? portfolioColor : "#e5e7eb";
  const textColor = portfolioColor !== "" ? "white" : "black";
  const projectCodeLink = `https://${codeLink}`;
  const projectPageLink = `https://${projectLink}`;
  return (
    <>
      <div
        id="bentoGrid"
        className="grid h-[100%] mb-[24px] grid-cols-6 grid-rows-3 gap-3 font-light">
        {/* for the project description */}
        <div
          className="gridSection grid place-items-center rounded-lg p-[1em] col-span-2 text-left text-lg overflow-hidden"
          style={{
            background: `${sectionColor}`,
            color: `${textColor}`,
          }}>
          {portfolioDescription}
        </div>
        {/* for any icon or unique project related svg */}
        <div
          className="gridSection grid place-items-center rounded-lg p-[1em] "
          style={{
            background: `${sectionColor}`,
          }}>
          {projectIcon !== "" ? (
            <img src={projectIcon} alt="projectIcon" />
          ) : (
            projectTitle
          )}
        </div>
        {/* for mobile view */}
        <div className="gridSection relative grid place-items-center rounded-lg p-[1em] bg-gray-200 row-span-2 col-span-2">
          <img src={projectImgMobile} alt={projectTitle} />
        </div>
        {/* Project title */}
        <div
          className="gridSection grid place-items-center rounded-lg p-[1em] font-light text-2xl"
          style={{
            background: `${sectionColor}`,
            color: `${textColor}`,
          }}>
          {projectTitle}
        </div>
        {/* main project image or desktop view */}
        <div
          onMouseEnter={() => {
            setShowEvent(true);
          }}
          onMouseLeave={() => {
            setShowEvent(false);
          }}
          className="gridSection grid place-items-center relative rounded-lg col-span-3 row-span-2 overflow-auto"
          style={{
            background: `${sectionColor}`,
          }}>
          <img
            src={projectImgDesktop}
            alt={projectTitle}
            className=" aspect-video"
          />
          {showEvent && (
            <EventModal linkTo={projectPageLink} button={"visit site"} />
          )}
        </div>
        <div
          className="gridSection grid place-items-center rounded-lg p-[1em] bg-gray-200"
          style={{
            background: `${sectionColor}`,
            color: `${textColor}`,
          }}></div>
        {/* view code */}

        <div
          className="gridSection  rounded-lg p-[1em]"
          style={{
            background: `${sectionColor}`,
          }}>
          <a
            href={projectCodeLink}
            target="_blank"
            className="w-[100%] h-[100%] grid place-items-center">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7.5 12.5L7.07574 12.0757L6.65147 12.5L7.07574 12.9243L7.5 12.5ZM17.5 12.5L17.9243 12.9243L18.3485 12.5L17.9243 12.0757L17.5 12.5ZM11.4243 15.5757L7.92426 12.0757L7.07574 12.9243L10.5757 16.4243L11.4243 15.5757ZM7.92426 12.9243L11.4243 9.42426L10.5757 8.57574L7.07574 12.0757L7.92426 12.9243ZM13.5757 9.42426L17.0757 12.9243L17.9243 12.0757L14.4243 8.57574L13.5757 9.42426ZM17.0757 12.0757L13.5757 15.5757L14.4243 16.4243L17.9243 12.9243L17.0757 12.0757Z"
                  fill={`${textColor}`}></path>
              </g>
            </svg>
          </a>
        </div>
        {/* alphabet style */}
        <div
          className="gridSection grid place-items-center rounded-lg p-[1em]  col-span-2"
          style={{
            background: `${sectionColor}`,
            color: `${textColor}`,
          }}>
          <span>Aa Bb Cc Dd</span>
        </div>
      </div>
    </>
  );
}

export default BentoGrid;
