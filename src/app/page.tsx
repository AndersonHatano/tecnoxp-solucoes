"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import useMobile from "../../components/useMobile";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export default function Home() {
  const isMobile: boolean = useMobile();

  return (
    <div>
      <div className={`${!isMobile ? "grid grid-cols-2" : "grid grid-cols-1 pb-3 p-4"}`}>
        
        <div>
          <div className={`${!isMobile ? "" : "justify-items-center pb-3"}`}>
            <Image
              src="/logo-ajustado.svg"
              width={140}
              height={140}
              alt="logo tecnoxp"/>
          </div>
          <p className={`${poppins.className} font-bold text-4xl`}>Automatize. Cresça.</p>
          <p className={`${poppins.className} font-bold text-4xl`}>Eleve a experiência</p>
          <p className={`${poppins.className} font-bold text-4xl`}>do seu cliente</p>
          <p className={`${poppins.className} font-bold text-4xl`}>com a Tecno XP!</p>
          <p className={`${poppins.className} text-lg pt-4`}>Você sente que seu negócio poderia estar vendendo mais, mas falta tempo e estrutura?</p>
        </div>

        {!isMobile && (
          <div>
            <Image
            src="/diagrama.svg"
            width={100}
            height={100}
            alt="diagrama"/>
          </div>
        )}
      </div>

      <div className="bg-blue-600 pt-3 pb-3">
        <p className={`${poppins.className} text-sm pl-4 pr-4 text-stone-50`}>Pequenos e médios empresários precisam de mais que força de vontade: precisam de sistemas inteligentes e presença digital sólida.</p>
      </div>

      <div>
        <p className={`${poppins.className} text-sm pt-3 pl-4 pr-4`}>Na <strong>Tecno XP</strong>, <strong>nós criamos sistemas e sites que simplificam sua rotina, aumentam suas vendas e melhoram cada interação com seu cliente</strong>.</p>
        <p className={`${poppins.className} text-sm pt-3 pl-4 pr-4`}><strong>Elevando a eXPeriência do seu cliente</strong> — e o sucesso do seu negócio!</p>
      </div>

      <div>
        <p className={`${poppins.className} text-base font-bold pt-3 pl-4 pr-4 text-blue-600`}>O que entregamos:</p>
      </div>

      <div className="overflow-x-auto p-4" style={{ perspective: "1000px" }}>
        <div className="flex space-x-4">

          <div
            className="min-w-[300px] bg-gray-100 p-4 rounded shadow transform transition duration-300 hover:scale-105 hover:[transform:rotateY(6deg)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="/confimar.svg"
              width={30}
              height={30}
              alt="confirmar"/>
            <p className={`${poppins.className} text-sm`}>
              <strong>Sistemas sob medida</strong>, que automatizam pedidos, estoque, agendamento e atendimento.
            </p>
          </div>

          <div
            className="min-w-[300px] bg-gray-100 p-4 rounded shadow transform transition duration-300 hover:scale-105 hover:[transform:rotateY(6deg)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="/confimar.svg"
              width={30}
              height={30}
              alt="confirmar"/>
            <p className={`${poppins.className} text-sm`}>
              <strong>Sites modernos e otimizados para conversão</strong>, 24h no ar captando novos clientes.
            </p>
          </div>

          <div
            className="min-w-[300px] bg-gray-100 p-4 rounded shadow transform transition duration-300 hover:scale-105 hover:[transform:rotateY(6deg)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="/confimar.svg"
              width={30}
              height={30}
              alt="confirmar"/>
            <p className={`${poppins.className} text-sm`}>
              <strong>Soluções intuitivas</strong>, feitas para você e para a realidade do seu mercado.
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className={`${poppins.className} text-base font-bold pt-3 pl-4 pr-4`}>Imagine</p>
      </div>

      <div className="flex pt-3 pl-4 pr-4">
        <Image
          src="/polegar-sucesso.svg"
          width={30}
          height={30}
          alt="polegar do sucesso"/>
        <p className={`${poppins.className} text-sm pl-2`}>Ter mais vendas sem precisar aumentar sua carga de trabalho.</p>
      </div>

      <div className="flex pt-3 pl-4 pr-4">
        <Image
          src="/polegar-sucesso.svg"
          width={30}
          height={30}
          alt="polegar do sucesso"/>
        <p className={`${poppins.className} text-sm pl-2`}>Ver seus clientes satisfeitos, voltando e indicando seu negócio.</p>
      </div>

      <div className="flex pt-3 pb-3 pl-4 pr-4">
        <Image
          src="/polegar-sucesso.svg"
          width={30}
          height={30}
          alt="polegar do sucesso"/>
        <p className={`${poppins.className} text-sm pl-2`}>Liberar seu tempo para focar no que realmente importa: <strong>crescer</strong>.</p>
      </div>

      <div className="bg-blue-600 pt-3 pb-3">
        <p className={`${poppins.className} text-sm pl-4 pr-4 text-stone-50`}><strong>Cada dia sem automação e presença online é um cliente perdido.</strong></p>
        <p className={`${poppins.className} text-sm pt-2 pl-4 pr-4 text-stone-50`}>Seus concorrentes sabem disso. E você?.</p>
      </div>

      <div>
        <p className={`${poppins.className} text-base font-bold pt-3 pl-4 pr-4`}>Melhores tecnologias</p>
      </div>

      <div className="overflow-x-auto p-4" style={{ perspective: "1000px" }}>
        <div className="flex space-x-2">

          <div
            className="min-w-[300px] bg-gray-100 p-4 rounded shadow transform transition duration-300 hover:scale-105 hover:[transform:rotateY(6deg)] flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}>

            <Image
              src="/logo-aws.svg"
              width={120}
              height={120}
              alt="logo da aws"/>
          </div>

          <div
            className="min-w-[300px] bg-gray-100 p-4 rounded shadow transform transition duration-300 hover:scale-105 hover:[transform:rotateY(6deg)] flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}>

            <Image
              src="/nextjs-logo.svg"
              width={150}
              height={150}
              alt="logo do nextjs"/>
          </div>

          <div
            className="min-w-[300px] bg-gray-100 p-4 rounded shadow transform transition duration-300 hover:scale-105 hover:[transform:rotateY(6deg)] flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}>

            <Image
              src="/oracle-logo.svg"
              width={150}
              height={150}
              alt="logo da oracle"/>
          </div>
        
          <div
            className="min-w-[300px] bg-gray-100 p-4 rounded shadow transform transition duration-300 hover:scale-105 hover:[transform:rotateY(6deg)] flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}>

            <Image
              src="/logo-vercel.svg"
              width={150}
              height={150}
              alt="logo da vercel"/>
          </div>
        </div>
      </div>

      <div className="flex pl-4 pr-4">
        <Image
          src="/foguete.svg"
          width={60}
          height={60}
          alt="foguete"/>
        <p className={`${poppins.className} text-sm pl-4`}>Com a <strong>Tecno XP, seu negócio vai além — vai mais rápido, mais longe e com mais clientes felizes.</strong></p>
      </div>

      <div className="flex pt-3 pl-4 pr-4 pb-3">
        <div>
          <p className={`${poppins.className} text-sm`}><strong>Tecnologia confiável. Resultados reais.</strong></p>
          <p className={`${poppins.className} text-sm`}><strong>Elevando a eXPeriência</strong> do seu cliente — e o futuro da sua empresa.</p>
        </div>
      </div>

      <div className="flex justify-center pb-5">
        <button
          className="bg-blue-600 rounded-full py-2 px-4 hover:bg-blue-700 transition-colors duration-200"
          type="button"
          onClick={() =>
            window.location.href =
              "https://web.whatsapp.com/send?phone=55999163866&text&type=phone_number&app_absent=0"
          }
        >
          <span className={`${poppins.className} text-sm text-white font-semibold`}>
            Fale agora com nossos especialista
          </span>
        </button>
      </div>
    </div>
  );
}
