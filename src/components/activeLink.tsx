import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";
import { useRouter } from "next/router";

interface ActiveLinlProps extends LinkProps {
  children: ReactElement;
  activeClassName?: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinlProps) {
  const { asPath } = useRouter(); // se estiver na pagina about
  const className = asPath === rest.href ? activeClassName : "";
  // se a rota/pagina que estamos acessando for igual ao link que ele clicou então ativamos o classname

  return (
    <Link
      {...rest}
      className="p-3 m-1 rounded-full hover:text-gray-100 dark:hover:text-gray-400"
    >
      {cloneElement(children, { className })}
    </Link>
  );
}
