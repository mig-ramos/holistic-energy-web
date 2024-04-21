import { ChangeEvent, FormEvent, useState } from "react";
import { InputText } from "@/components/ui/InputText";
import Company from "./Company";
import Button from "@/components/ui/Button";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import { api } from "@/services/apiClient";
import { APP_SERV } from "@/data/config/configApp";
import { useCompany } from "@/data/hooks/home/useCompany";
import { TextArea } from "@/components/ui/TextArea";

interface FormularioProps {
  company: Company;
  companyMudou?: (company: Company) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const { listAll } = useCompany();

  const id = props.company?.id ?? null;
  const [photo, setPhoto] = useState(props.company?.photo ?? "");
  const [companyName, setCompanyName] = useState(
    props.company?.companyName ?? ""
  );
  const [description, setDescription] = useState(
    props.company?.description ?? ""
  );
  const [companyAddress, setCompanyAddress] = useState(
    props.company?.companyAddress ?? ""
  );
  const [officeOur, setOfficeOur] = useState(props.company?.officeOur ?? "");
  const [email, setEmail] = useState(props.company?.email ?? "");
  const [zap, setZap] = useState(props.company?.zap ?? "");
  const [facebook, setFacebook] = useState(props.company?.facebook ?? "");
  const [youtube, setYoutube] = useState(props.company?.youtube ?? "");
  const [instagram, setInstagram] = useState(props.company?.instagram ?? "");
  const [twitter, setTwitter] = useState(props.company?.twitter ?? "");

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

    if (props.company.id) {
      props.companyMudou?.(
        new Company(
          companyName,
          description,
          companyAddress,
          photo,
          officeOur,
          zap,
          email,
          facebook,
          youtube,
          instagram,
          twitter,
          id
        )
      );
    } else {
      try {
        const data = new FormData();

        if (officeOur === "" || email === "" || zap === "") {
          toast.error("Preencha os campos obrigatórios!");
          return;
        }
        data.append("companyName", companyName);
        data.append("description", description);
        data.append("companyAddress", companyAddress);
        data.append("photo", photo);
        data.append("officeOur", officeOur);
        data.append("zap", zap);
        data.append("email", email);
        data.append("facebook", facebook);
        data.append("youtube", youtube);
        data.append("instagram", instagram);
        data.append("twitter", twitter);
        data.append("file", imageAvatar);

        await api.post("/home/company", data);

        toast.success("Cadastrado com sucesso!");
      } catch (err) {
        toast.error("Ops erro ao cadastrar!");
      } finally {
        setCompanyName("");
        setDescription("");
        setCompanyAddress("");
        setDescription("");
        setOfficeOur("");
        setPhoto("");
        setZap("");
        setEmail("");
        setFacebook("");
        setInstagram("");
        setTwitter("");
        setYoutube("");
        setImageAvatar(null);
        setAvatarUrl("");
        mostraTabela();
      }
    }
  }

  return (
    <div>
      <form className="my-4" onSubmit={handleRegister}>
        {id ? <InputText label="Id" valor={id} somenteLeitura /> : false}

        {props.company.id ? (
          <img
            src={pathImage + props.company.photo}
            alt={`Empresa ${props.company.photo.split("-")[1].split(".")[0]}`}
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
                alt="Foto da Empresa"
                width={250}
                height={250}
              />
            )}
          </label>
        )}

        <InputText
          tipo="text"
          label="Nome da Empresa"
          valor={companyName}
          valorMudou={setCompanyName}
        />

        <TextArea
          label="Descrição"
          rows={4}
          valor={description}
          valorMudou={setDescription}
        />

        <InputText
          tipo="text"
          label="Endereço"
          valor={companyAddress}
          valorMudou={setCompanyAddress}
        />

        {props.company.id && (
          <InputText
            label="Foto"
            valor={photo}
            valorMudou={setPhoto}
            somenteLeitura
          />
        )}

        <InputText
          tipo="text"
          label="Expediente"
          valor={officeOur}
          valorMudou={setOfficeOur}
        />

        <InputText
          tipo="text"
          label="Zap"
          valor={zap}
          valorMudou={setZap}
          obrigatorio
        />

        <InputText
          tipo="text"
          label="E-mail"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />

        <InputText
          tipo="text"
          label="Facebook"
          valor={facebook}
          valorMudou={setFacebook}
        />

        <InputText
          tipo="text"
          label="Youtube"
          valor={youtube}
          valorMudou={setYoutube}
        />

        <InputText
          tipo="text"
          label="Instagram"
          valor={instagram}
          valorMudou={setInstagram}
        />

        <InputText
          tipo="text"
          label="Twitter"
          valor={twitter}
          valorMudou={setTwitter}
        />

        <div className="">
          {/* {props.slideMudou?.(new Slide(name, slogan, id))} */}
          {props.company.id ? (
            <Button
              cor="blue"
              onClick={() =>
                props.companyMudou?.(
                  new Company(
                    companyName,
                    description,
                    companyAddress,
                    photo,
                    officeOur,
                    zap,
                    email,
                    facebook,
                    youtube,
                    instagram,
                    twitter,
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
