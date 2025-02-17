import React from "react";
import useSharedState from "./test";
import ComponentB from "./test3";

const ComponentA: React.FC = () => {
  const { state, useSetState } = useSharedState();

  return (
    <div>
      <ComponentB state={state} useSetState={useSetState} />
    </div>
  );
};

export default ComponentA;
