import UnderlineTx from '../../Components/Basic/UnderlineTx';
import Header from '../../Components/Header/Header';

function LandingPage() {
  return (
    <>
      <Header/>
      <div className='mb-32 flex'/>
      <div className='text-center justify-center w-full'>
        <h1 className='text-2xl'>Bem vindo ao <UnderlineTx text="Namicz"/>! A nossa plataforma devisualização de dados demográficos e geográficos!</h1>
      </div>

      

      <div className='h-[125vh]'/>
    </>
  );
}


export default LandingPage;