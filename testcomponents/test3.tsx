import React from 'react';

interface ComponentBProps {
  state: boolean;
  useSetState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ComponentB: React.FC<ComponentBProps> = ({ state, useSetState }) => {
  return (
    <div>
      <p>State is: {state ? 'True' : 'False'}</p>
      <button onClick={() => useSetState(!state)}>Toggle State</button>
    </div>
  );
};

export default ComponentB;
