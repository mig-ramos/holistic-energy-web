import Content from "@/components/offTheHome/content";
import Link from "next/link";

export default function Custom404() {
  return (
    <Content>
      <div
        className={`flex flex-col bg-orange-100 h-auto dark:bg-gray-800
        dark:text-gray-200 w-full pt-4`}
      >
        <div
          className={`flex flex-col w-11/12 mx-auto justify-center items-center`}
        >
          <h1 className={`text-2xl font-bold text-orange-500`}>Ops!</h1>
          <h2 className={`text-xl font-bold`}>Página não encontrada!</h2>
          <Link
            href={"/"}
            className={`border-2 px-4 py-2 bg-orange-300 rounded-xl my-4 text-xl font-bold hover:bg-orange-500`}
          >
            VOLTAR
          </Link>
        </div>
      </div>
    </Content>
  );
}
