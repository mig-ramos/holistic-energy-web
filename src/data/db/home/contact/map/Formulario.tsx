import { ChangeEvent, FormEvent, useState } from "react";
import { InputText } from "@/components/ui/InputText";
import MapLocal from "./MapLocal";
import Button from "@/components/ui/Button";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { api } from "@/services/apiClient";
import { APP_SERV } from "@/data/config/configApp";
import { useMapLocal } from "@/data/hooks/home/useMapLocal";

interface FormularioProps {
  mapLocal: MapLocal;
  mapLocalMudou?: (mapLocal: MapLocal) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const { listAll } = useMapLocal();

  const id = props.mapLocal?.id ?? null;
  const [photo, setPhoto] = useState(props.mapLocal?.photo ?? "");
  const [title, setTitle] = useState(props.mapLocal?.title ?? "");
  const [apiKey, setApiKey] = useState(props.mapLocal?.apiKey ?? "");
  const [lat, setLat] = useState(props.mapLocal?.lat ?? "");
  const [lng, setLng] = useState(props.mapLocal?.lng ?? "");
  const [mapId, setMapId] = useState(props.mapLocal?.mapId ?? "DEMO_MAP_ID");

  const [info, setInfo] = useState(props.mapLocal?.info ?? "");

  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState(null);

  const pathImage = APP_SERV.pathBaseImages;

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    //console.log(e.target.files);

    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];

    if (!image) {
      return;
    }

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  function mostraTabela() {
    listAll();
  }

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    if (props.mapLocal.id) {
      props.mapLocalMudou?.(
        new MapLocal(title, photo, apiKey, lat, lng, info, mapId, id)
      );
    } else {
      try {
        const data = new FormData();

        let mapPhoto = title === "" || imageAvatar === "null";

        let mapGoogle =
          title === "" ||
          apiKey === "" ||
          lat === "" ||
          lng === "" ||
          info === "" ||
          mapId === "";

        if (!mapPhoto && !mapGoogle) {
          toast.error("Preencha todos os campos!");
          return;
        }

        data.append("title", title);
        data.append("file", imageAvatar);
        data.append("apiKey", apiKey);
        data.append("lat", lat);
        data.append("lng", lng);
        data.append("info", info);
        data.append("mapId", mapId);

        await api.post("/home/map-local", data);

        toast.success("Cadastrado com sucesso!");
      } catch (err) {
        toast.error("Ops erro ao cadastrar!");
      } finally {
        setTitle("");
        setApiKey("");
        setLat("");
        setPhoto("");
        setLng("");
        setInfo("");
        setMapId("DEMO_MAP_ID");
        setImageAvatar(null);
        setAvatarUrl("");
        mostraTabela();
      }
    }
  }

  return (
    <div className="py-4">
      <form className="mt-4" onSubmit={handleRegister}>
        {id ? <InputText label="Id" valor={id} somenteLeitura /> : false}

        {props.mapLocal.id ? (
          <img
            src={pathImage + props.mapLocal.photo}
            alt={`Sobre ${props.mapLocal.photo.split("-")[1].split(".")[0]}`}
            className="mt-4 rounded-lg"
          />
        ) : (
          <label
            className={`w-full h-[380] relative bg-slate-900 mb-4 rounded flex justify-center items-center cursor-pointer`}
          >
            <span
              className={`absolute top-[50%] z-[99] opacity-70 transition-all hover:scale-125 hover:opacity-100`}
            >
              <FiUpload size={30} color="#BBB" />
            </span>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFile}
              className="hidden"
            />
            {avatarUrl && (
              <img
                className="w-full h-full object-cover rounded-md"
                src={avatarUrl}
                alt="Foto do Produto"
                width={250}
                height={250}
              />
            )}
          </label>
        )}

        {props.mapLocal.id && (
          <InputText
            label="Foto"
            valor={photo}
            valorMudou={setPhoto}
            somenteLeitura
          />
        )}

        <InputText
          tipo="text"
          label="Título"
          valor={title}
          valorMudou={setTitle}
          obrigatorio
        />
        <div>
          <h2 className="text-xl font-bold mt-2">
            Preencher abaixo caso a opção seja Google Map
          </h2>
          <p>Na opção de Google Map, o upload da imagem não precisa.</p>
          <InputText
            tipo="text"
            label="Api-Key"
            valor={apiKey}
            valorMudou={setApiKey}
          />

          <InputText
            tipo="text"
            label="Latitude"
            valor={lat}
            valorMudou={setLat}
          />

          <InputText
            tipo="text"
            label="Longitude"
            valor={lng}
            valorMudou={setLng}
          />

          <InputText
            tipo="text"
            label="Info Mapa"
            valor={info}
            valorMudou={setInfo}
            placeholser="Aqui!"            
          />

          <InputText
            tipo="text"
            label="Id do Google Map"
            valor={mapId}
            valorMudou={setMapId}
            placeholser="DEMO_MAP_ID"
          />
        </div>
        <div>
          {/* {props.slideMudou?.(new Slide(name, slogan, id))} */}
          {props.mapLocal.id ? (
            <Button
              cor="blue"
              onClick={() =>
                props.mapLocalMudou?.(
                  new MapLocal(title, apiKey, photo, lat, lng, info, mapId, id)
                )
              }
            >
              {id ? "Alterar" : "Salvar"}
            </Button>
          ) : (
            <button
              className="   bg-green-600 dark:bg-green-900 text-black py-3 px-8 rounded-xl mt-4 mr-1 w-full dark:text-white hover:bg-green-500 dark:hover:bg-green-800 hover:text-black hover:font-bold"
              type="submit"
            >
              Salvar
            </button>
          )}

          <Button cor="gray" onClick={props.cancelado}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
