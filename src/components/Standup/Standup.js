import React, { Fragment } from 'react';
import Teammates from './Teammates';

const Standup = () => {
  const teammates = ['James', 'Oyínwonúolá', 'Fred', 'Táyò'];
  return (
    <Fragment>
      <h1>Standup</h1>
      <Teammates teammates={teammates} />
    </Fragment>
  );
};

export default Standup;