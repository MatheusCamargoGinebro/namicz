import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { Typewriter } from 'react-simple-typewriter';
// import namiczImg from '';
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

      <div className='mt-36 w-full flex justify-evenly'>
        <div className=' w-96 h-96'>
          <img src="../../assets/images/namicz-icon.svg" alt="namiczLogo" className='' />
        </div>

        <div className='border-2 border-slate-800 w-[45rem] h-96'>
          <div className='w-full bg-slate-300  border-b-[1px] border-slate-800 py-5 pl-4'>
            <h1 className='text-xl'><UnderlineTx text="O que é isso?"/></h1>
          </div>
          <div>
            <div className='p-5'>
              <h1>
                O NAMICZ é uma plataforma revolucionária que fornece acesso gratuito a uma riqueza de dados demográficos do IBGE. Com foco na visualização de informações detalhadas sobre nomes de pessoas por região do Brasil, esta ferramenta intuitiva permite aos usuários explorar e analisar facilmente as informações geográficas e demográficas valiosas fornecidas pelo IBGE.
              </h1>
              
            </div>
            
          </div>
          <div className='bg-slate-700 w-full h-3 relative mb-0 mt-24'>

          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
