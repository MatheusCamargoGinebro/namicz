import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { Typewriter } from 'react-simple-typewriter';
import UnderlineTx from '../../Components/Basic/UnderlineTx';
import SearchIcon from '@mui/icons-material/Search';
import namiczImg from '../../assets/images/namicz-Icon.svg';

function LandingPage() {
  const [showNamicz, setshowNamicz] = useState(false);
  const [showRest, setshowRest] = useState(false);

  var cont = 0;
  return (
    <>
      <Header />
      <div className='h-screen w-full flex items-center text-center justify-center'>
        <h1 className='text-4xl'>
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

      <div className='w-full h-screen bg-slate-700 flex justify-evenly items-center'>
        <div className='bg-slate-50 cursor-pointer'>
          <img src={namiczImg} alt="namiczLogo" className=' w-96 h-96  shadow-2xl hover:scale-105 duration-150'/>
        </div>

        <div className='border-[1px] border-slate-800 w-[45rem] h-fit shadow-2xl hover:scale-105 duration-100 cursor-pointer'>
          <div className='w-full bg-slate-200  border-b-[1px] border-slate-800 py-5 pl-4'>
            <h1 className='text-xl'><UnderlineTx text="O que é isso?"/></h1>
          </div>
          <div>
            <div className='py-5 px-14 bg-white'>
              <h1>
                O NAMICZ é uma plataforma revolucionária que fornece acesso gratuito a uma riqueza de dados demográficos do IBGE. Com foco na visualização de informações detalhadas sobre nomes de pessoas por região do Brasil, esta ferramenta intuitiva permite aos usuários explorar e analisar facilmente as informações geográficas e demográficas valiosas fornecidas pelo IBGE.
              </h1>
              
            </div>
            
          </div>
          <div className='bg-white pr-14 w-full h-24 flex justify-end items-center'>
            <a href="/Map" className='flex items-center justify-center gap-1 h-11 p-1 pr-2 border-[1px] border-slate-400 text-slate-50 bg-slate-800 hover:bg-slate-700 hover:w-fit hover:px-3 duration-75'><SearchIcon className='text-slate-50' size={35}/> <p>Ver Mapa</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
