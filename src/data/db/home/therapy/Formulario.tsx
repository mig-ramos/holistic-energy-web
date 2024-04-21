import { ChangeEvent, FormEvent, useState } from "react";
import { InputText } from "@/components/ui/InputText";
import Therapy from "./Therapy";
import Button from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { api } from "@/services/apiClient";
import { APP_SERV } from "@/data/config/configApp";
import { useTherapy } from "@/data/hooks/home/useTherapy";

interface FormularioProps {
  therapy: Therapy;
  therapyMudou?: (therapy: Therapy) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const { listAll } = useTherapy();

  const id = props.therapy?.id ?? null;
  const [photo, setPhoto] = useState(props.therapy?.photo ?? "");
  const [name, setName] = useState(props.therapy?.name ?? "");
  const [description, setDescription] = useState(
    props.therapy?.description ?? ""
  );

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

    if (props.therapy.id) {
      props.therapyMudou?.(new Therapy(name, description, photo, id));
    } else {
      try {
        const data = new FormData();

        if (name === "" || description === "" || imageAvatar === null) {
          console.log(name + description + imageAvatar)
          toast.error("Preencha todos os campos!");
          return;
        }
        data.append("name", name);
        data.append("description", description);
        data.append("file", imageAvatar);

        await api.post("/home/therapy", data);

        toast.success("Cadastrado com sucesso!");
      } catch (err) {
        toast.error("Ops erro ao cadastrar!");
      } finally {
        setName("");
        setDescription("");
        setPhoto("");
        setImageAvatar(null);
        setAvatarUrl("");
        mostraTabela();
      }
    }
  }

  return (
    <div className="py-4">
      <form className="mt-4 flex flex-col" onSubmit={handleRegister}>
        {id ? <InputText label="Id" valor={id} somenteLeitura /> : false}

        {props.therapy.id ? (
          <img
            src={pathImage + props.therapy.photo}
            alt={`Terapia ${props.therapy.photo.split("-")[1].split(".")[0]}`}
            className="mt-4 rounded-lg"
          />
        ) : (
          <label
            className={"w-full bg-blue-900 mb-4 rounded-xl cursor-pointer flex justify-center items-center"} 
          >
            <span
              className={`absolute z-50 opacity-20 transition-all hover:scale-125 hover:opacity-100 `}
            >
              <FiUpload size={40} color="#BBB" />
            </span>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFile}
              className="hidden"
              // className="hidden"
            />
            {avatarUrl && (
              <img
                className="w-full h-full object-cover rounded-md"
                src={avatarUrl}
                alt="Foto da Terapia"
                width={250}
                height={250}
              />
            )}
          </label>
        )}

        {props.therapy.id && (
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
          valor={name}
          valorMudou={setName}
          obrigatorio
        />

        <TextArea
          label="Descrição"
          rows={5}
          valor={description}
          valorMudou={setDescription}
          obrigatorio
        />

        <div>
          {/* {props.slideMudou?.(new Slide(name, slogan, id))} */}
          {props.therapy.id ? (
            <Button
              cor="blue"
              onClick={() =>
                props.therapyMudou?.(
                  new Therapy(name, description, photo, id)
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
