import { ChangeEvent, FormEvent, useState } from "react";
import { InputText } from "@/components/ui/InputText";
import Slide from "../../models/Slide";
import Button from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { api } from "@/services/apiClient";
import { APP_SERV } from "@/data/config/configApp";
import { useSlide } from "@/data/hooks/home/useSlide";

interface FormularioProps {
  slide: Slide;
  slideMudou?: (slide: Slide) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const { listAll } = useSlide();

  const id = props.slide?.id ?? null;
  const [name, setName] = useState(props.slide?.name ?? "");
  const [slogan, setSlogan] = useState(props.slide?.slogan ?? "");

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

    if (props.slide.id) {
      props.slideMudou?.(new Slide(name, slogan, id));
    } else {
      try {
        const data = new FormData();

        if (slogan === "" || imageAvatar === null) {
          toast.error("Preencha todos os campos!");
          return;
        }
        data.append("slogan", slogan);
        data.append("file", imageAvatar);

        await api.post("/home/slide", data);

        toast.success("Cadastrado com sucesso!");
      } catch (err) {
        toast.error("Ops erro ao cadastrar!");
      } finally {
        setName("");
        setSlogan("");
        setImageAvatar(null);
        setAvatarUrl("");
        mostraTabela();
      }
    }
  }

  return (
    <div className="py-4">
      <form className="mt-4" onSubmit={handleRegister}>
        {id ? <InputText label="Código" valor={id} somenteLeitura /> : false}

        {props.slide.id ? (
          <img
            src={pathImage + props.slide.name}
            alt={`Slide ${props.slide.name.split("-")[1].split(".")[0]}`}
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

        {props.slide.id && (
          <InputText
            label="Nome"
            valor={name}
            valorMudou={setName}
            somenteLeitura
          />
        )}

        <TextArea
          label="Slogan"
          rows={3}
          valor={slogan}
          valorMudou={setSlogan}
        />

        <div>
          {/* {props.slideMudou?.(new Slide(name, slogan, id))} */}
          {props.slide.id ? (
            <Button
              cor="blue"
              onClick={() => props.slideMudou?.(new Slide(name, slogan, id))}
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
