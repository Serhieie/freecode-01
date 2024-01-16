import styled from "@emotion/styled";

export const ButtonsWrapper = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  margin-top: 40px;
  @media (max-width: 768px) {
    gap: 4px;
  }
`;

export const PostInSocialTwitter = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px;

  font-size: 28px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${(props) => `${props.color}`};
  color: white;
  transition: all 600ms ease-in-out;

  :hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    margin-left: 0px;
    padding: 0px;
  }
`;

export const PostInSocialTumblr = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px;

  font-size: 28px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${(props) => `${props.color}`};
  color: white;
  transition: all 600ms ease-in-out;

  :hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const GetQuote = styled.button`
  margin-left: auto;
  font-size: 28px;
  font-weight: 600;
  border: none;
  outline: none;
  box-sizing: content-box;
  cursor: pointer;

  transition: all 600ms ease-in-out;

  border-radius: 4px;

  padding: 10px 20px;
  margin-right: 20px;

  background-color: ${(props) => `${props.color}`};
  color: white;

  :hover {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: 0px;
    padding: 12px 10px;
  }
`;
