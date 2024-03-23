import useAppData from "@/data/hooks/useAppData";
import { Header } from "./header";
import { Footer } from "./footer";
import { useTherapy } from "@/data/hooks/home/useTherapy";


export function LayoutPublic({ children }: any) {
  const { tema } = useAppData();
  const { therapies } = useTherapy();
  return (
    <>
      <div className={`${tema}`}>
        <Header />
        <main>{children}</main>
        <Footer therapies={therapies} />
      </div>
    </>
  );
}
