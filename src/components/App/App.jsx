import { BASE_URL } from "../../constants/constants.js";
import { QuoteCard, QuoteCardWrapper } from "./App.styles.jsx";
import { generateRandomColor } from "../../helpers/random-color.js";
import { Buttons } from "../Buttons/Buttons.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { Quote } from "../Quote/Quote.jsx";

const body = document.body;

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);
  const [color, setColor] = useState(generateRandomColor());
  const [visible, setVisible] = useState(false);

  const fetchData = async () => {
    setVisible(false);
    const newColor = generateRandomColor();
    body.style.backgroundColor = newColor;
    body.style.color = newColor;
    setColor(newColor);
    try {
      const response = await axios.get(`${BASE_URL}`);
      setTimeout(() => {
        setQuote(response.data.content);
        setAuthor(response.data.author);
      }, 100);
    } catch (error) {
      setError(true);
      setColor("orangered");
    } finally {
      setTimeout(() => {
        setVisible(true);
      }, 600);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <QuoteCardWrapper>
      <QuoteCard id="quote-box" color={color}>
        {error ? (
          <p>Ups! Something went wrong, try again.</p>
        ) : (
          <Quote quote={quote} author={author} color={color} visible={visible} />
        )}
        <Buttons handleClick={handleClick} color={color} quote={quote} author={author} />
      </QuoteCard>
      <p style={{ textAlign: "center", color: "white", fontWeight: 500 }}>
        for freeCodeCamp task by Serhieie <br />
        used hezag example
      </p>
    </QuoteCardWrapper>
  );
}

export default App;
