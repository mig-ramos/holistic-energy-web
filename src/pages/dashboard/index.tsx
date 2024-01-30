import { canSSRAuth } from "@/utils/canSSAuth";
import Content from "@/components/offTheHome/content";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelHeader } from "@/components/layoutDashborad/panelHeader";
import { Head } from "next/document";

export default function Dashboard() {
  return (
    <Content>
      <LayoutDasboard>
        <PanelHeader />

        <div>Meu Painellll</div>
      </LayoutDasboard>
    </Content>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
