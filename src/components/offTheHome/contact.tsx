export function Contact() {
  return (
    <section className={`mx-auto my-auto rounded-3xl mt-4`}>
      <div className={`border-s-8 border-green-500 p-4`}>
        <h2 className={`text-green-500 text-start  text-xl`}>Redes Sociais</h2>
        <h1 className={`text-green-500 text-start  font-bold text-3xl`}>
          Entre em Contato
        </h1>
      </div>
      <div className={`flex mt-4`}>
        <div className={`w-1/2`}>
          <h3 className={`font-bold text-2xl mb-2`}>Redes Sociais</h3>
        </div>
        <div className={`w-1/2`}>
          <h3 className={`font-bold text-2xl mb-2`}>Formulário de Contato</h3>
        </div>
      </div>
    </section>
  );
}
