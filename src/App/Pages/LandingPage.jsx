import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { Typewriter } from 'react-simple-typewriter';
import namiczImg from '../../assets/images/namicz-icon.svg';
import UnderlineTx from '../../Components/Basic/UnderlineTx';

function LandingPage() {
  const [showNamicz, setshowNamicz] = useState(false);
  const [showRest, setshowRest] = useState(false);

  var cont = 0;
  return (
    <>
      <Header />
      <div className='mb-32 flex' />

      <div className='text-center justify-center w-full'>
        <h1 className='text-2xl'>
          <Typewriter
            words={['Bem vindo ao ']}
            loop={1}
            cursor={false}
            typeSpeed={70}
            onType={
              () => {
                cont++;
                if (cont === 12) {
                  setshowNamicz(true);
                  cont = 0;
                }
              }
            }
          />

          {!!showNamicz &&
          <span className='border-b-4 font-medium border-slate-800'>
          <Typewriter
            words={['Namicz!']}
            loop={1}
            cursor={false}
            typeSpeed={70}
            onType={() => {
              cont++;
              if (cont === 7) {
                setshowRest(true);
              }
            }}
          />
        </span>}

        {!!showRest &&
          <Typewriter
            words={[' ','a noss',' A nossa plataforma de visualização de dados demográficos e geográficos!']}
            loop={1}
            cursor={false}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={40}
          />
        }
        </h1>
      </div>

      
    </>
  );
}

export default LandingPage;
