// Desc: Header Component
import Logo from "../../Components/Basic/Logo";
function Header() {
  return (
    <div className="fixed z-50 flex justify-between items-center w-full bg-slate-100 py-5 px-10">
      <Logo />

      <div>
        <ul className="flex">
          <li className="mr-5">
            <a href="#" className="text-slate-500 hover:text-black">
              início
            </a>
          </li>
          <li className="mr-5">
            <a href="#sobre" className="text-slate-500 hover:text-black">
              sobre
            </a>
          </li>
          <li className="mr-5">
            <a href="#finalidade" className="text-slate-500 hover:text-black">
              finalidade
            </a>
          </li> 
          <li className="mr-5">
            <a href="#funcionalidades" className="text-slate-500 hover:text-black">
              funcionalidades
            </a>
          </li> 
          <li className="mr-5">
            <a href="#envolvidos" className="text-slate-500 hover:text-black">
              envolvidos
            </a>
          </li>
          <li className="mr-5">
            <a
              href="/Map"
              className="text-slate-200 bg-slate-800 px-3 py-2 rounded-sm hover:text-slate-50 hover:bg-black duration-75">
              VER MAPA
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
