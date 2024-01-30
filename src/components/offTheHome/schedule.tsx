export function Schedule() {
  return (
    <section className={`mx-auto my-auto rounded-3xl bg-zinc-100 dark:bg-gray-800 mt-4`}>
      <div className={`border-s-8 border-green-500 p-4`}>
        <h2 className={`text-green-500 text-start  text-xl`}>
          Calendário de Agendamentos
        </h2>
        <h1 className={`text-green-500 text-start  font-bold text-3xl`}>
          Agendar uma Consulta
        </h1>
      </div>
      <div className={`flex mt-4`}>
        <div className={`w-1/2`}>
          <h3 className={`dark:text-gray-300 selection:marker:font-bold text-2xl mb-2`}>Seus Agendamentos</h3>
        </div>
        <div className={`w-1/2`}>
          <h3 className={`dark:text-gray-300 font-bold text-2xl mb-2`}>
            Verifique os dias e horas disponíveis!
          </h3>
        </div>
      </div>
    </section>
  );
}
