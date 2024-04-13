import About from "@/data/db/home/about/About";
import { APP_SERV } from "@/data/config/configApp";

type AboutProps = {
  about: About[];
};

export function AboutHome<T>(props: AboutProps) {
  const pathImage = APP_SERV.pathBaseImages;

  let aboutHome = props.about;

  return (
    <section className="border border-solid border-green-500 rounded-3xl bg-zinc-100">
      {aboutHome.map((item) => {
        return (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row mx-auto my-auto rounded-3xl  justify-center  dark:bg-gray-700 mt-4`}
          >
            <div className={`md:w-9/12  text-start`}>
              <div className="border-s-8 border-green-500 p-4">
                <h2 className={`text-green-500 text-xl`}>{item.subTitle}:</h2>
                <h1 className={`font-bold text-green-500 text-3xl`}>
                  {item.title}
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
                alt={item.subTitle}
                className="rounded-3xl w-full hover:scale-110 hover:rotate-2 duration-300"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
