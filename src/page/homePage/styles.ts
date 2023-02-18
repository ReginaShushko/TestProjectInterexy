import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const ArticleWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px 0;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
`;
export const AsideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  background-color: #ef5b5b;
  min-width: 130px;
  > p {
    font-style: italic;
  }
`;
export const Navigation = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  background: #769c90;
  text-align: left;
  padding: 3rem 1.5rem;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 560px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 10px;
    color: #111111;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 560px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #621651;
    }
  }
`;
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #05498f;
`;