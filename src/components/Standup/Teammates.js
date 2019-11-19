import React from 'react';

const Teammates = (props) => {
  return props.teammates.map((teammate, index) => (
    <div className="teammates" key={index+teammate}>
      {teammate}
    </div>
  ))
};

export default Teammates;
