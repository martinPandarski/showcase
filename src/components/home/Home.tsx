import PageWrap from "../PageWrap";
import Hero from "./Hero";
import Marquee from "../Marquee";
import Work from "./Work";

const Home: React.FC = () => (
  <PageWrap>
    <Hero />
    <Marquee />
    <Work />
  </PageWrap>
);

export default Home;
