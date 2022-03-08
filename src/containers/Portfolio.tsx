import Container from "@mui/material/Container";
import { Header } from "./Header";
import { Main } from "./Main";
import { BackgroundFooter } from "../components/BackgroundFooter";
import { Intro } from "./Intro";

// Adding imports for fontsource
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Footer } from "./Footer";

export const Portfolio = () => {
  return (
    <div className="Portfolio">
      <Container maxWidth="md">
        <Header />
        <Intro />
        <Main />
        <Footer />
        <BackgroundFooter />
      </Container>
    </div>
  );
};
