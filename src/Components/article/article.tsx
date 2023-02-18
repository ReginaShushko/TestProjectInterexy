import { ArticleSquare, Square, SquareSecond, SquareThird } from "./article.styled";

export default function ArticleFirst() {
  return (
    <>
      <ArticleSquare>
        <Square></Square>
      </ArticleSquare>
    </>
  );
}

export function ArticleSecond() {
  return (
    <>
      <ArticleSquare>
        <SquareSecond></SquareSecond>
      </ArticleSquare>
    </>
  );
}

export function ArticleThird() {
  return (
    <ArticleSquare>
      <SquareThird></SquareThird>
    </ArticleSquare>
  );
}