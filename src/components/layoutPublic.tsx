import useAppData from "@/data/hooks/useAppData";
import { Header } from "./header";
import { Footer } from "./footer";

export function LayoutPublic({ children }: any) {
  const { tema } = useAppData();
  return (
    <>
      <div className={`${tema}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
