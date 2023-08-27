import Board from "../Game/Board";
import "./Home.scss";
import Highlight from "react-highlight";

const Home = () => {
  return (
    <div className="page-wrapper">
      <section>
        <p>I am</p>
        <h1>Martin Pandarski</h1>
        <h2>{">"} Frontend Developer</h2>
        <span>// try to complete the game &#128527; </span>
        <Highlight className="javascript">
          {"const githubLink = 'https://github.com/example/url'"}
        </Highlight>
      </section>
      <Board aiPlayer="O" humanPlayer="X" />
    </div>
  );
};

export default Home;
