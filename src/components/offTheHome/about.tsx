import { useCompany } from "@/data/hooks/home/useCompany";
import { APP_SERV } from "@/data/config/configApp";


export function AboutHome() {
  const pathImage = APP_SERV.pathBaseImages;

const { companies } = useCompany();

  return (
    <section className="border border-solid border-green-500 rounded-3xl bg-zinc-100">
      {companies.map((item) => {
        return (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row mx-auto my-auto rounded-3xl  justify-center  dark:bg-gray-700 mt-4`}
          >
            <div className={`md:w-9/12  text-start`}>
              <div className="border-s-8 border-green-500 p-4">
                <h2 className={`text-green-500 text-xl`}>Sobre Nós:</h2>
                <h1 className={`font-bold text-green-500 text-3xl`}>
                  {item.companyName}
                </h1>
              </div>
              <div
                className={`mt-4 mr-4 text-xl text-gray-700 dark:text-gray-300 p-4`}
              >
                {item.description}
              </div>
            </div>
            <div
              className={`flex justify-center items-center p-4 md:w-96 md:mt-0 h-auto `}
            >
              <img
                src={pathImage + item.photo}
                height={260}
                alt={item.companyName}
                className="rounded-3xl w-full hover:scale-110 hover:rotate-2 duration-300"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
