import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ArticleSquare,
  Square,
  SquareSecond,
  SquareThird,
} from "./article.styled";

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
  const fps = 60;
  const refreshRate = 1000 / fps;
  let speed = 1;
  let position = 0;

  const articleSquareWrapperRef: any = useRef(0);
  const squareRef: any = useRef(0);

  const [width, setWidth] = useState(0);
  const [squareWidth, setSquareWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(articleSquareWrapperRef.current.offsetWidth - 10);
    setSquareWidth(squareRef.current.offsetWidth);
  });
  
  useEffect(() => {
    setInterval(() => {
      position = position + speed;
      if (position > width - squareWidth || position < 0) {
        speed = speed * -1;
      }
      squareRef.current.style.transform = `translateX(${position}px)`;
    }, refreshRate);
  }, [width]);

  return (
    <>
      <ArticleSquare ref={articleSquareWrapperRef}>
        <SquareSecond ref={squareRef}></SquareSecond>
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
