export function Schedule() {
  return (
    <section
      className={`flex flex-col md:flex-row mx-auto  rounded-3xl bg-zinc-100 dark:bg-gray-800
     mt-4 border border-solid border-green-500 rounded-3xl`}
    >
      <div className={`md:w-1/2`}>
        <div className={`border-s-8 border-green-500 mt-4 p-4`}>
          <h2 className={`text-green-500 text-xl`}>
            Calendário de Agendamentos
          </h2>

          <h1 className={`text-green-500 font-bold text-3xl`}>
            Agendar Consulta
          </h1>
        </div>
      </div>
      <div className={`md:w-1/2 p-4`}>
        <div className={`dark:text-gray-300 font-normal text-xl my-2`}>
          <p>Manifestou interesse em conhecer nosso atendimento?</p>
          <p>Considere criar sua conta e ter o seu Painel de Cliente!</p>
          <p>Lá você terá acesso aos dias e horários disponíveis e,</p>
          <p>poderá agendar no dia e hora de sua preferência!</p>
        </div>
        <div className={`flex justify-center`}>
          <button
            onClick={() => alert("Criar meu Painel")}
            className={`p-2 w-full bg-green-700 hover:bg-green-600 rounded-xl text-xl text-white font-bold hover:scale-110 duration-300`}
          >
            Ir para o seu Painel
          </button>
        </div>
      </div>
    </section>
  );
}
