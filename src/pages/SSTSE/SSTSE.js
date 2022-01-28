import React from 'react';
import { homeObjOne, homeObjThree } from './Data';
import { InfoSection } from '../../components';
import { Button } from '../../globalStyles';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Home;
