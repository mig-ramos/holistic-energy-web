interface TituloProps {
    titulo: string;
    subtitulo: string;
  }
  
  export default function Titulo(props: TituloProps) {
    return (
      <div className={`mt-2 mx-2`}>
        <h1
          className={`
          font-black text-xl
          text-gray-900
          dark:text-gray-100
          `}>
              {props.titulo}
        </h1>
        <h2
          className={`
             font-light text-lg text-gray-600 
             dark:text-gray-300 
          `}>
              {props.subtitulo}
          </h2>
      </div>
    );
  }