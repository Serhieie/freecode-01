import {
  ButtonsWrapper,
  PostInSocialTwitter,
  PostInSocialTumblr,
  GetQuote,
} from "./Buttons.styles";
import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialTumblerCircular } from "react-icons/ti";

export const Buttons = ({ handleClick, color, quote, author }) => {
  const postToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `" ${quote} " 
      ${author}`
    )}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <ButtonsWrapper>
      <PostInSocialTwitter
        onClick={postToTwitter}
        href="https://twitter.com/"
        id="tweet-quote"
        target="_blank"
        rel="noreferrer"
        color={color}
      >
        <RiTwitterXLine style={{ margin: 5 }} size={30} />
      </PostInSocialTwitter>
      <PostInSocialTumblr
        href="https://tumblr.com/"
        id="tweet-quote"
        target="_blank"
        rel="noreferrer"
        color={color}
      >
        <TiSocialTumblerCircular size={40} />
      </PostInSocialTumblr>
      <GetQuote color={color} type="button" onClick={handleClick} id="new-quote">
        New quote
      </GetQuote>
    </ButtonsWrapper>
  );
};
