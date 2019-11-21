import React, { Fragment } from 'react';
import Teammates from './Teammates';
import standupStyle from './standup.module.css';

const Standup = () => {
  const teammates = ['James', 'Oyínwonúolá', 'Fred', 'Táyò'];
  return (
    <Fragment>
      {/* <Teammates teammates={teammates} /> */}
      <div className={standupStyle.welcomeText}>
        <p>Hi guyz, welcome to today’s standup.<br />
          Its awesome to hear from you again and to get to know of the awesome work you’ve been doing since the last time.
        </p>
        <button className={standupStyle.beginButton}>Let's begin</button>
      </div>
    </Fragment>
  );
};

export default Standup;