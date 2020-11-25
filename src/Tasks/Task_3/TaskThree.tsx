import React from 'react';
import useEnv from './useEnv';

const TaskThree = () => {
  const { env } = useEnv();
  return (
    <div>
      <div>
        <span>Width: {env.viewportWidth} px</span>
      </div>
      <div>
        <span>Height: {env.viewportHeight} px</span>
      </div>
      <span>{env.platform}</span>
      <span>{env.device}</span>
      <span>{env.browser}</span>
      <span>{env.system}</span>
      <span>{env.hasTouchableScreen}</span>
      <span>{env.connectionStatus}</span>
    </div>
  );
};

export default TaskThree;
