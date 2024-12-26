import { FunctionComponent } from "react";
import Input01TextField02States from "../components/Input01TextField02States";
import Button01CTA01Prymary from "../components/Button01CTA01Prymary";

const InicioLogin: FunctionComponent = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start pt-[66px] pb-[50px] pl-[159px] pr-[77px] box-border gap-[85px] leading-[normal] tracking-[normal] text-left text-13xl text-white font-nunito mq750:gap-[42px] mq750:pl-[79px] mq750:pr-[38px] mq750:box-border mq450:gap-[21px] mq450:pl-5 mq450:box-border">
      <img
        className="w-[1821px] h-[1024px] relative object-contain hidden max-w-full z-[0]"
        alt=""
        src="/smiley-pregnant-woman-holding-clipboard-and-pointing-up-with-copy-space@2x.png"
      />
      <div className="flex flex-row items-start justify-start gap-1.5">
        <img
          className="h-[45px] w-[37px] relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/ranking-cvlg-1.svg"
        />
        <a className="[text-decoration:none] relative font-bold text-[inherit] z-[1] mq450:text-lgi mq1050:text-[26px]">
          Ranking CV
        </a>
      </div>
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <section className="absolute top-[-6px] left-[0px] [background:linear-gradient(85.71deg,_#25254e_30.23%,_#3b3b77)] w-[1440px] h-[1024px]" />
        <div className="absolute top-[171px] left-[-51px] rounded-[50%] bg-lightseagreen-300 w-[229px] h-[229px] z-[1]" />
        <div className="absolute top-[-76px] left-[1147px] rounded-[50%] bg-lightseagreen-300 w-[229px] h-[229px] z-[1]" />
        <div className="absolute top-[-100px] left-[742px] shadow-[-15px_15px_30px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-lightseagreen-200 w-[331px] h-[331px] z-[1]" />
        <div className="absolute top-[-45px] left-[1277px] rounded-[50%] bg-darkslateblue-400 w-[331px] h-[331px] z-[2]" />
        <div className="absolute top-[292.1px] left-[1376px] rounded-[50%] bg-lightseagreen-300 w-[229px] h-[227.5px] z-[1]" />
        <img
          className="absolute top-[231px] left-[-19px] w-[1451px] h-[689px] z-[3]"
          alt=""
          src="/rectangle-237.svg"
        />
        <div className="absolute top-[631px] left-[-131px] rounded-[50%] bg-lightseagreen-200 w-[497px] h-[497px] z-[4]" />
        <div className="absolute top-[614px] left-[1285px] rounded-[50%] bg-darkslateblue-300 w-28 h-[111.3px] z-[6]" />
        <div className="absolute top-[511.7px] left-[481px] rounded-[50%] bg-lightseagreen-300 w-[191px] h-[189.8px] z-[4]" />
      </main>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-[40px] text-darkslateblue-200">
        <div className="flex-1 flex flex-row items-start justify-start gap-[61px] max-w-full lg:flex-wrap mq750:gap-[30px] mq450:gap-[15px]">
          <div className="shadow-[-15px_15px_30px_rgba(0,_0,_0,_0.25)] rounded-2xl bg-darkslateblue-100 flex flex-col items-start justify-start pt-8 px-8 pb-10 box-border gap-20 max-w-full z-[5] lg:flex-1 mq750:min-w-full mq450:gap-10 mq450:pt-[21px] mq450:pb-[26px] mq450:box-border">
            <div className="self-stretch hidden flex-col items-start justify-start py-2.5 px-0">
              <div className="flex flex-row items-center justify-center p-2.5 gap-1.5 mq450:flex-wrap">
                <img
                  className="h-[45px] w-[37px] relative overflow-hidden shrink-0"
                  alt=""
                />
                <b className="relative mq450:text-5xl mq1050:text-13xl">
                  Ranking CV
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-8 text-5xl text-white mq450:gap-4">
              <div className="flex flex-col items-start justify-start">
                <h2 className="m-0 relative text-inherit font-bold font-[inherit] mq450:text-lgi">
                  Te damos la bienvenida
                </h2>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <form className="m-0 self-stretch flex flex-col items-center justify-center gap-2">
                  <Input01TextField02States
                    state="Default"
                    variant="Succes"
                    showIcon
                    label="Nombre de usuario"
                    text="Usuario 1234"
                  />
                  <Input01TextField02States
                    state="Default"
                    variant="Succes"
                    showIcon
                    label="Contraseña"
                    text="··············"
                  />
                  <Button01CTA01Prymary
                    iconLeft={false}
                    iconRight={false}
                    size="Medium"
                    state="Default"
                  />
                  <div className="self-stretch hidden flex-row items-center justify-center py-2 px-2.5">
                    <div className="relative text-sm [text-decoration:underline] font-medium font-underline-01-medium-01-14 text-lightgray text-left">
                      Crear nueva contraseña
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border min-w-[441px] max-w-full mq750:min-w-full">
            <div className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-[26.4px] pb-[13px] pl-[30px] pr-6 box-border gap-[48.8px] max-w-full z-[5] mq750:gap-6 mq1050:flex-wrap">
              <div className="ml-[-160.8px] mb-[-40px] h-28 w-28 relative rounded-[50%] bg-darkslateblue-400 shrink-0" />
              <div className="h-[598.6px] w-[622.5px] relative shrink-0 max-w-full">
                <div className="absolute top-[428.6px] left-[437.2px] rounded-[50%] bg-lightseagreen-300 w-[170px] h-[170px] z-[4]" />
                <div className="absolute top-[0px] left-[0px] [filter:drop-shadow(-15px_15px_30px_rgba(0,_0,_0,_0.25))] w-[622.5px] h-[433.8px]">
                  <img
                    className="absolute h-full w-[33.62%] top-[0px] right-[66.38%] bottom-[0px] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group.svg"
                  />
                  <div className="absolute h-[93.55%] w-[32.24%] top-[2.67%] right-[34.62%] bottom-[3.78%] left-[33.14%] z-[1]">
                    <div className="absolute h-[63.26%] w-[87.84%] top-[36.74%] right-[3.44%] bottom-[0%] left-[8.72%]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/group-1.svg"
                      />
                      <img
                        className="absolute top-[114.1px] left-[69.2px] w-[69.5px] h-[16.7px] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/group-2.svg"
                      />
                      <img
                        className="absolute top-[115.6px] left-[30.7px] w-4 h-4 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                      <img
                        className="absolute top-[156.9px] left-[70px] w-[69.5px] h-[16.7px] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/group-3.svg"
                      />
                      <img
                        className="absolute top-[158.5px] left-[32.1px] w-4 h-4 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <img
                      className="absolute h-[56.55%] w-full top-[0%] right-[0%] bottom-[43.45%] left-[0%] max-w-full overflow-hidden max-h-full z-[2]"
                      alt=""
                      src="/group-4.svg"
                    />
                  </div>
                  <img
                    className="absolute h-[95.11%] w-[33.57%] top-[3.18%] right-[0%] bottom-[1.71%] left-[66.43%] max-w-full overflow-hidden max-h-full"
                    loading="lazy"
                    alt=""
                    src="/group-5.svg"
                  />
                  <img
                    className="absolute h-[6.85%] w-[4.77%] top-[28.1%] right-[94.49%] bottom-[65.05%] left-[0.74%] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className="absolute h-[4.4%] w-[3.07%] top-[33.98%] right-[93.09%] bottom-[61.62%] left-[3.84%] max-w-full overflow-hidden max-h-full z-[2]"
                    loading="lazy"
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
                <img
                  className="absolute top-[231.4px] left-[289.9px] w-[275.9px] h-[361.6px] z-[3]"
                  alt=""
                  src="/group-6.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioLogin;
