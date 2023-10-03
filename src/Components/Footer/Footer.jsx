import Logo from "../Basic/Logo"

function Footer(){
    return(
        <div className='w-full h-fit pt-6 bg-slate-200 block text-slate-800' id="Footer">

            <div className='flex justify-between items-center'>
                <div className='w-[30vw] flex items-center justify-center'>
                    <Logo/>
                </div>
                <div className='flex items-center justify-around'>
                    <div className='h-full w-[40vw] p-6 border-l-[1px]'>
                        <ul className='gap-2 grid'>
                            <li><a href="https://servicodados.ibge.gov.br/api/docs" target="_blank" className='hover-text-black hover:bg-slate-50 duration-100'>| API de serviço de dados do IBGE</a></li>
                            <li><a href="https://github.com/vct-h-dias/IBGE-Insides" target="_blank" className='hover-text-black hover:bg-slate-50 duration-100'>| Repositório do projeto</a></li>
                            <li><a href="#" target="_blank" className='hover-text-black hover:bg-slate-50 duration-100'>| Documentação do projeto</a></li>
                        </ul>
                    </div>
                    <div className='h-full w-96 p-6 border-r-[1px] text-end'>
                        <ul className='gap-2 grid'>
                            <li><a href="https://www.ibge.gov.br/" target="_blank" className='hover-text-black hover:bg-slate-50 duration-100'>Instituto Brasileiro de Geografia e Estatística |</a></li>
                            <li><a href="https://portal.cmp.ifsp.edu.br/" target="_blank" className='hover-text-black hover:bg-slate-50 duration-100'>Instituto Federal - IFSP Câmpus Campinas |</a></li>
                            <li><a href="#" target="_blank" className='hover-text-black hover:bg-slate-50 duration-100'>Entrar em contato |</a></li>
                        </ul>
                    </div>
                </div>
                <div className='w-[30vw] h-1'>
                </div>
            </div>
            
            <div className='flex justify-center items-baseline'>
                <h1>©2023 The IFers</h1>
            </div>
        </div>
    )
}

export default Footer