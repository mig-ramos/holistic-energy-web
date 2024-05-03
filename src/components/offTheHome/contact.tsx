import { useState } from "react";

import { TextArea } from "../ui/TextArea";
import { InputText } from "../ui/InputText";
import Button from "../ui/Button";
import { toast } from "react-toastify";
import { Mapa } from "@/components/maps/apiProvider";
import { APP_SERV } from "@/data/config/configApp";
import MapLocal from "@/data/db/models/MapLocal";

type MapLocalProps = {
  mapLocal: MapLocal[];
};

export function Contact<T>(props: MapLocalProps) {
  const pathImage = APP_SERV.pathBaseImages;

  let mapLocalHome = props.mapLocal;

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [texto, setTexto] = useState("");
  const [phone, setPhone] = useState(APP_SERV.phone);

  const apiKey = APP_SERV.apiKey;
  const lat = APP_SERV.lat;
  const lng = APP_SERV.lng;
  const mapId = APP_SERV.mapId;

  let message = "";

  async function formContact() {
    if (nome === "" || email === "" || texto === "") {
      toast.warning("Preencher todos os campos...");
    } else {
      try {
        message = encodeURIComponent(
          `Meu nome: ${nome} \n Email: ${email} \n Assunto: ${texto}`
        );
        return window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
      } catch (error) {
        toast.error("Não foi possível enviar o WhatsApp...");
      } finally {
        setNome("");
        setEmail("");
        setTexto("");
      }
    }
  }

  return (
    <section
      className={`mx-auto my-4 border border-solid border-green-500 rounded-3xl`}
    >
      <div className={`border-s-8 border-green-500 mt-4 p-4`}>
        <h2 className={`text-green-500 text-start  text-xl`}>
          Formulário para contato
        </h2>
        <h1 className={`text-green-500 text-start  font-bold text-3xl`}>
          Entre em Contato
        </h1>
      </div>
      <div className={`flex flex-col md:flex-row p-4`}>
        <div className={`md:w-1/2 w-full`}>
          <div className="mt-4 md:mr-4">
            {/* <h3 className={`font-bold text-2xl mb-2`}>Formulário de Contato</h3> */}
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
                rows={3}
                obrigatorio
              />
              <Button cor="blue" onClick={formContact}>
                Enviar
              </Button>
            </div>
          </div>
        </div>

        <div className={`mt-4 md:mt-0 md:w-1/2 w-full`} id="Mapa">
          {mapLocalHome.map((item) => {
            return (
              <div key={item.id}>
                <h3 className={`font-light text-xl mb-2`}>{item.title}:</h3>
                {!item.info ? (
                  <img
                    src={pathImage + item.photo}
                    alt={item.title}
                    className="rounded-2xl flex size-auto hover:scale-140"
                  />
                ) : (
                  <div>
                    <div className="flex w-full h-[380px] items-center justify-center bg-slate-300 border rounded-2xl">
                      <Mapa
                        apiKey={item.apiKey}
                        lat={Number(item.lat.trim())}
                        lng={Number(item.lng.trim())}
                        mapId={item.mapId}
                        info={item.info}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
