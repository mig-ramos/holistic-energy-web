import { ChangeEvent, FormEvent, useState } from "react";
import { InputText } from "@/components/ui/InputText";
import About from "./About";
import Button from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { api } from "@/services/apiClient";
import { APP_SERV } from "@/data/config/configApp";
import { useAbout } from "@/data/hooks/home/useAbout";

interface FormularioProps {
  about: About;
  aboutMudou?: (about: About) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const { listAll } = useAbout();

  const id = props.about?.id ?? null;
  const [photo, setPhoto] = useState(props.about?.photo ?? "");
  const [title, setTitle] = useState(props.about?.title ?? "");
  const [subTitle, setSubTitle] = useState(props.about?.subTitle ?? "");
  const [description, setDescription] = useState(
    props.about?.description ?? ""
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

    if (props.about.id) {
      props.aboutMudou?.(new About(title, subTitle, description, photo, id));
    } else {
      try {
        const data = new FormData();

        if (title === "" || subTitle === "" || description === "" || imageAvatar === null) {
          toast.error("Preencha todos os campos!");
          return;
        }
        data.append("title", title);
        data.append("subTitle", subTitle);
        data.append("description", description);
        data.append("file", imageAvatar);

        await api.post("/home/about", data);

        toast.success("Cadastrado com sucesso!");
      } catch (err) {
        toast.error("Ops erro ao cadastrar!");
      } finally {
        setTitle("");
        setSubTitle("");
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
      <form className="mt-4" onSubmit={handleRegister}>
        {id ? <InputText label="Id" valor={id} somenteLeitura /> : false}

        {props.about.id ? (
          <img
            src={pathImage + props.about.photo}
            alt={`Sobre ${props.about.photo.split("-")[1].split(".")[0]}`}
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

        {props.about.id && (
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

        <InputText
          tipo="text"
          label="Sub-Título"
          valor={subTitle}
          valorMudou={setSubTitle}
          obrigatorio
        />

        <TextArea
          label="Descrição"
          rows={4}
          valor={description}
          valorMudou={setDescription}
          obrigatorio
        />

        <div>
          {/* {props.slideMudou?.(new Slide(name, slogan, id))} */}
          {props.about.id ? (
            <Button
              cor="blue"
              onClick={() =>
                props.aboutMudou?.(
                  new About(title, subTitle, description, photo, id)
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
