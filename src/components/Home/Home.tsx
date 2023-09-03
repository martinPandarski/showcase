import Comments from "../Comments/Comments";
import Board from "../Game/Board";
import "./Home.scss";

const Home = () => {
  return (
    <div className="page-wrapper">
      <div className="inner">
        <section>
          <p>I am</p>
          <h1>Martin Pandarski</h1>
          <h2>{">"} Frontend Developer</h2>
          <span>// try to complete the game &#128527; </span>
          <Comments code="const githubLink = 'https://github.com/example/url'" />
        </section>
        <Board aiPlayer="O" humanPlayer="X" />
      </div>
    </div>
  );
};

export default Home;
