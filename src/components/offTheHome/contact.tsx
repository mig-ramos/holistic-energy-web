import { useState } from "react";

import { TextArea } from "../ui/TextArea";
import { InputText } from "../ui/InputText";
import Button from "../ui/Button";
import { toast } from "react-toastify";

export function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState("");

  async function formContact() {
    if (nome === "" || email === "" || texto === "") {
      toast.warning("Preencher todos os campos...");
    } else {
      return toast.info(`${nome}, tão logo que possível entraremos em contato!`);
    }
  }

  return (
    <section className={`mx-auto my-auto rounded-3xl mt-4`}>
      <div className={`border-s-8 border-green-500 p-4`}>
        <h2 className={`text-green-500 text-start  text-xl`}>Redes Sociais</h2>
        <h1 className={`text-green-500 text-start  font-bold text-3xl`}>
          Entre em Contato
        </h1>
      </div>
      <div className={`flex flex-col md:flex-row mt-4`}>
        <div className={`md:w-1/2 w-full mb-4`}>
          <h3 className={`font-bold text-2xl mb-2`}>Redes Sociais</h3>
          <ul>
            <li>
              <span className="font-bold">Zap:</span> 11 45673-4567
            </li>
            <li>
              <span className="font-bold">E-mail:</span>{" "}
              terapias-holisticas@teste.com
            </li>
            <li>
              <span className="font-bold">Atendimento:</span> das 09:00hs às
              16:00hs
            </li>
          </ul>
          <ul className="flex flex-row gap-4">
            <li>Face</li>
            <li>Insta</li>
            <li>YouTube</li>
          </ul>
          <div className="mt-4 md:mr-4">
            <h3 className={`font-bold text-2xl mb-2`}>Formulário de Contato</h3>
            <div>
              <InputText
                label="Nome"
                tipo="text"
                valor={nome}
                valorMudou={setNome}
                obrigatorio
              />
              <InputText
                label="Email"
                tipo="email"
                valor={email}
                valorMudou={setEmail}
                obrigatorio
              />
              <TextArea
                label="Assunto"
                valor={texto}
                valorMudou={setTexto}
                rows={4}
                obrigatorio
              />
              <Button cor="blue" onClick={formContact}>
                Enviar
              </Button>
            </div>
          </div>
        </div>

        <div className={`md:w-1/2 w-full mb-4`}>
          <h3 className={`font-bold text-2xl mb-2`}>Onde Estamos:</h3>
          <div className="flex w-full h-[500px] items-center justify-center bg-slate-300 border rounded-2xl">
            Map
          </div>
        </div>
      </div>
    </section>
  );
}
