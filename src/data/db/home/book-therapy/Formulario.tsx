import { ChangeEvent, FormEvent, useState } from "react";
import { InputText } from "@/components/ui/InputText";
import BookTherapy from "../../models/BookTherapy";
import Button from "@/components/ui/Button";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { api } from "@/services/apiClient";
import { APP_SERV } from "@/data/config/configApp";
import { useBookTherapy } from "@/data/hooks/home/useBookTherapy";
import { TextArea } from "@/components/ui/TextArea";
import { Select } from "@/components/ui/Select";

interface FormularioProps {
  bookTherapy: BookTherapy;
  bookTherapyMudou?: (bookTherapy: BookTherapy) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const { listAll } = useBookTherapy();

  const id = props.bookTherapy?.id ?? null;
  const [photo, setPhoto] = useState(props.bookTherapy?.photo ?? "");
  const [title, setTitle] = useState(props.bookTherapy?.title ?? "");
  const [subTitle, setSubTitle] = useState(props.bookTherapy?.subTitle ?? "");
  const [buttonTitle, setButtonTitle] = useState(
    props.bookTherapy?.buttonTitle ?? ""
  );
  const [description, setDescription] = useState(
    props.bookTherapy?.description ?? ""
  );

  const [mostrar, setMostrar] = useState(props.bookTherapy?.mostrar ?? "");

  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState(null);

  const pathImage = APP_SERV.pathBaseImages;

  const options = [
    { value: "Não", label: "Não Mostrar" },
    { value: "Sim", label: "Mostrar" },
  ];

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

    if (props.bookTherapy.id) {
      props.bookTherapyMudou?.(
        new BookTherapy(
          title,
          subTitle,
          buttonTitle,
          photo,
          description,
          mostrar,
          id
        )
      );
    } else {
      try {
        const data = new FormData();

        if (
          title === "" ||
          subTitle === "" ||
          buttonTitle === "" ||
          description === "" ||
          mostrar === "" ||
          imageAvatar === null
        ) {
          toast.error("Preencha todos os campos!");
          return;
        }
        data.append("title", title);
        data.append("subTitle", subTitle);
        data.append("buttonTitle", buttonTitle);
        data.append("description", description);
        data.append("mostrar", mostrar);
        data.append("file", imageAvatar);

        await api.post("/home/book-therapy", data);

        toast.success("Cadastrado com sucesso!");
      } catch (err) {
        toast.error("Ops erro ao cadastrar!");
      } finally {
        setTitle("");
        setSubTitle("");
        setButtonTitle("");
        setPhoto("");
        setDescription("");
        setMostrar("");
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

        {props.bookTherapy.id ? (
          <img
            src={pathImage + props.bookTherapy.photo}
            alt={`Sobre ${props.bookTherapy.photo.split("-")[1].split(".")[0]}`}
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

        {props.bookTherapy.id && (
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

        <InputText
          tipo="text"
          label="Label do Botão"
          valor={buttonTitle}
          valorMudou={setButtonTitle}
          obrigatorio
        />

        <TextArea
          label="Descrição"
          rows={4}
          valor={description}
          valorMudou={setDescription}
          obrigatorio
        />

        <Select
          defaultValue={mostrar}
          options={options}
          label="Mostrar na Home"
          valor={mostrar}
          valorMudou={setMostrar}
        />

        <div>
          {/* {props.slideMudou?.(new Slide(name, slogan, id))} */}
          {props.bookTherapy.id ? (
            <Button
              cor="blue"
              onClick={() =>
                props.bookTherapyMudou?.(
                  new BookTherapy(
                    title,
                    subTitle,
                    buttonTitle,
                    photo,
                    description,
                    mostrar,
                    id
                  )
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
