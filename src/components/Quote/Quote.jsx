import { BiSolidQuoteLeft } from "react-icons/bi";
import { QuoteContent, AuthorName, QuoteWrapper } from "./Quote.styles";

export const Quote = ({ quote, author, color, visible }) => {
  return (
    <QuoteWrapper>
      <QuoteContent color={color} id="text" visible={visible}>
        <BiSolidQuoteLeft /> {quote}
      </QuoteContent>
      <AuthorName color={color} id="author" visible={visible}>
        - {author}
      </AuthorName>
    </QuoteWrapper>
  );
};
