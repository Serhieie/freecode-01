import styled from "@emotion/styled";

export const QuoteCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 54%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const QuoteCard = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 98%;
  padding: 40px;
  min-height: 290px;

  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 4px;
  }
`;
