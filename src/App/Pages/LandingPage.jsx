// Dependencies:
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Slide from "@mui/material/Slide";

// Components:
import UnderlineTx from "../../Components/Basic/UnderlineTx";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import GoDownBtn from "../../Components/Basic/goDownBtn";

// Images:
import SearchIcon from "@mui/icons-material/Search";
import namiczImg from "../../assets/images/namicz-Icon.svg";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function LandingPage() {
  const [showNamicz, setshowNamicz] = useState(false);
  const [showRest, setshowRest] = useState(false);
  const [showSlide, setShowSlide] = useState(false);

  var cont = 0;
  return (
    <>
      <Header />
      <div className="block h-screen">
        <div className="w-full flex items-center text-center justify-center h-[94vh]">
          <h1 className="text-4xl">
            <Typewriter
              words={["Bem vindo ao "]}
              loop={1}
              cursor={false}
              typeSpeed={70}
              onType={() => {
                cont++;
                if (cont === 12) {
                  setshowNamicz(true);
                  cont = 0;
                }
              }}
            />

            {!!showNamicz && (
              <span className="border-b-4 font-medium border-slate-800">
                <Typewriter
                  words={["Namicz!"]}
                  loop={1}
                  cursor={false}
                  typeSpeed={70}
                  onType={() => {
                    cont++;
                    if (cont === 7) {
                      setshowRest(true);
                      cont = 0;
                    }
                  }}
                />
              </span>
            )}

            {!!showRest && (
              <Typewriter
                words={[
                  " ",
                  "a noss",
                  " A nossa plataforma de visualização de dados demográficos e geográficos!",
                ]}
                loop={1}
                cursor={false}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={40}
                onDelete={() => {
                  cont--;
                }}
                onType={() => {
                  cont++;
                  if (cont === 73) {
                    setShowSlide(true);
                    cont = 0;
                  }
                }}
              />
            )}
          </h1>
        </div>

        {!!showSlide && (
          <Slide
            direction="up"
            in={showSlide}
            mountOnEnter
            unmountOnExit
            timeout={1000}>
            <div id="aboutBtn" className="flex justify-center items-center">
              <GoDownBtn
                addClasses="bg-slate-800 text-white hover:bg-black border-2 border-slate-800 rounded-sm shadow-2xl"
                goTo="#sobre"
              />
            </div>
          </Slide>
        )}
      </div>

      <div id="sobre" className="bg-slate-700 w-full h-full shadow-inner">
        <div className="h-[95vh] flex justify-evenly items-center">
          <div className="bg-slate-50 cursor-pointer">
            <img
              src={namiczImg}
              alt="namiczLogo"
              className=" w-96 h-96  shadow-2xl hover:scale-105 duration-150"
            />
          </div>

          <div className="border-[1px] border-slate-800 w-[45rem] h-fit shadow-2xl">
            <div className="w-full bg-slate-200  border-b-[1px] border-slate-800 py-5 pl-4">
              <h1 className="text-xl">
                <UnderlineTx text="O que é isso?" />
              </h1>
            </div>
            <div>
              <div className="py-5 px-14 bg-white">
                <h1>
                  O Namicz é uma plataforma revolucionária que fornece acesso
                  gratuito a uma riqueza de dados demográficos do Instituto
                  Brasileiro de Geografia e Estatística. Com foco na
                  visualização de informações detalhadas sobre nomes de pessoas
                  por região do Brasil, esta ferramenta intuitiva permite aos
                  usuários explorar e analisar facilmente as informações
                  geográficas e demográficas valiosas fornecidas pelo IBGE.
                </h1>
              </div>
            </div>
            <div className="bg-white pr-14 w-full h-24 flex justify-end items-center">
              <a
                href="/Map"
                className="flex items-center justify-center gap-1 h-11 p-1 pr-2 border-[1px] border-slate-400 text-slate-50 bg-slate-800 hover:bg-slate-700 hover:w-fit hover:px-3 duration-75">
                <SearchIcon className="text-slate-50" /> <p>Ver Mapa</p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center pb-5">
          <GoDownBtn
            addClasses="bg-slate-50 text-bg-slate-800 hover:bg-slate-100 border-2 border-slate-50 rounded-sm shadow-2xl"
            goTo="#finalidade"
          />
        </div>
      </div>

      <div id="finalidade" className="w-full h-screen pt-28 shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex justify-center items-center mb-4">
          <div className="border-[1px] border-slate-800 w-[45rem] h-fit shadow-2xl duration-100 ">
            <div className="w-full bg-slate-200  border-b-[1px] border-slate-800 py-5 flex justify-center">
              <h1 className="text-xl">
                Nossa <UnderlineTx text="finalidade" />, a antroponomástica:
              </h1>
            </div>
            <div>
              <div className="py-5 px-14 bg-white">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nam quasi ut tenetur iste labore expedita voluptatem
                  sapiente minus inventore voluptatum qui at debitis maxime,
                  laborum nobis suscipit minima maiores. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Aliquid dolorum similique
                  impedit delectus ullam molestias voluptas laborum harum
                  cupiditate eveniet ea libero, praesentium laboriosam nam,
                  commodi at, deleniti laudantium quae? Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Doloremque, fugiat quasi.
                  Expedita porro, ea, nemo fuga blanditiis dolor dolores ab
                  officiis, inventore accusantium est aut obcaecati atque!
                  Minus, autem qui?
                </h1>
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  quia eos officiis quasi minima facilis, accusantium ullam
                  earum repellat maiores ea obcaecati sequi eius itaque. Facilis
                  illo debitis sequi rerum? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Reiciendis vitae molestiae ipsa
                  nostrum dicta laborum necessitatibus adipisci laudantium
                  accusamus, voluptatibus sed est voluptatum deleniti, numquam
                  ut, et illo iste earum.
                </h1>
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repudiandae quidem consectetur eaque rem molestias hic,
                  quaerat omnis sit possimus, doloribus alias veritatis illo
                  asperiores dolorum vero doloremque dicta neque! Nihil? Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
                  illum recusandae. At ullam a corporis distinctio, maxime
                  officia. Odit dolorum similique repellat, eaque nam enim
                  nesciunt id distinctio consequatur unde? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Explicabo id, quia et
                  laboriosam culpa excepturi possimus quod consequatur autem
                  tempore eligendi rerum velit quae odit rem quis corrupti eaque
                  cupiditate.
                </h1>
              </div>
            </div>
            <div className="bg-white pl-14 w-full h-24 flex items-center">
              <a
                href="#"
                className="flex items-center justify-center gap-1 h-11 p-2 border-[1px] border-slate-950 text-slate-950 bg-slate-50 hover:bg-slate-200 hover:w-fit hover:px-3 duration-75">
                <AutoStoriesIcon className="text-slate-950" />{" "}
                <p>Saiba mais!</p>
              </a>
            </div>
          </div>
        </div>
        <div id="aboutBtn" className="flex justify-center items-center">
          <GoDownBtn
            addClasses="bg-slate-800 text-white hover:bg-black border-2 border-slate-800 rounded-sm shadow-2xl"
            goTo="#envolvidos"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LandingPage;
