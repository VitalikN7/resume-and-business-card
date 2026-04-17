import { Layout } from "@widgets/Layout/Layout";
import { AboutSection } from "./AboutSection";
import { WorksSection } from "./WorksSection";

export const Home = () => {
  return (
    <Layout>
      <AboutSection />
      <WorksSection />
    </Layout>
  );
};
