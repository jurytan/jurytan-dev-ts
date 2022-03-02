import Container from "@mui/material/Container";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { BackgroundFooter } from "../components/BackgroundFooter";
import { Intro } from "../components/Intro";

// Adding imports for fontsource
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const Portfolio = () => {
  return (
    <div className="Portfolio">
      <Container maxWidth="md">
        <Header />
        <Intro />
        <Main />
        <BackgroundFooter />
      </Container>
    </div>
  );
};
