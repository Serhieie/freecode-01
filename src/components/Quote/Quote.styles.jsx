import styled from "@emotion/styled";

export const QuoteWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const QuoteContent = styled.p`
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  color: ${(props) => `${props.color}`};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: all 300ms ease-in-out;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const AuthorName = styled.p`
  font-size: 24px;
  font-weight: 400;
  display: flex;
  justify-content: flex-end;

  margin: 0;
  margin-top: 30px;

  color: ${(props) => `${props.color}`};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: all 300ms ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-right: 20px;
  }
`;
