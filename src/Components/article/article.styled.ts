import styled from "styled-components";

export const ArticleSquare = styled.article`
  background: #623565;
  padding: 10px;
  min-width: 500px;
  height: 50px;
  justify-content: center;
  flex-grow: 2;
`;
export const Square = styled.div`
  height: 45px;
  width: 45px;
  background-color: #036954;
  animation: 4s linear 0s infinite alternate bounce;
  @keyframes bounce {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(130vh);
    }
  }
`;
export const SquareSecond = styled.div`
  height: 45px;
  width: 45px;
  background-color: #036954;
`;
export const SquareSecondWrapper = styled.div`
  height: 45px;
  padding: 10px;
  min-width: 500px;
`;
export const SquareThird = styled.div`
  height: 45px;
  width: 45px;
  background-color: #036954;
`;
