import React, { useState } from 'react';
import '../styles/App.css';
const App = () => {
  const [count, setCount] = useState(1);

  setInterval(() => {
    count === 3 ? setCount(1) : setCount(count + 1);
  }, 9000);

  return (
    <div className='container'>
      <div className='photoContainer'>
        <img
          src={`/img/${count}.jpg`}
          alt='Mehmet Selçuk Candan'
          className='img'
        />
      </div>
      <div className='bioContainer'>
        <h1>Hello everyone!</h1>
        <h2>
          I am Mehmet Selçuk Candan, 23 years old Jr. Software Engineer from
          Turkey.
        </h2>
        <h3>I am interested in web technologies, especially JavaScript.</h3>
        <h3>
          I am currently the team leader of web and mobile app development team
          at{' '}
          <i>
            Sakarya University of Applied Sciences AISET autonomous car
            community.
          </i>
          <br />
          We are participating a competition called <i>TUBITAK Robotaksi</i>. Me
          and my teammates, we are working on MERN Stack Applications.
        </h3>
      </div>
      <div className='socialContainer'>
        <h3>Contact Me</h3>
        <ul>
          <li>Insta</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Mail</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
