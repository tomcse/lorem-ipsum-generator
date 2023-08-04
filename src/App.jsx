import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, settext] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempCount = parseInt(count);
    const tempText = data.slice(0, tempCount);
    settext(tempText);
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="count">Paragraphs:</label>
        <input
          type="number"
          name="count"
          id="count"
          value={count}
          onChange={handleChange}
          min={1}
          max={8}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((paragraph) => {
          const id = nanoid();
          return <p key={id}>{paragraph}</p>;
        })}
      </div>
    </section>
  );
};
export default App;
