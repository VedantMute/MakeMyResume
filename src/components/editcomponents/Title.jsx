import React from 'react';

const Title = ({ titleName }) => {
  return (
    <div className="mt-1">
      <div> <b>{titleName}</b></div>
      <hr className="h-0.5"/>
    </div>
  );
};

export default Title;
