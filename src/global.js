import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  div#root {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  h1 {
    display: flex;
    justify-content: center;
  }
  footer {
    justify-content: center;
    display: flex;
    margin-top: -24rem;
  }
  img{
    margin-top: -30rem;
    transform: scale(0.3) rotateY(0);
    animation: two 3s infinite;
  }
  @keyframes two {
  0% {
    transform: scale(0.3) rotateY(0);
  }
  50% {
    transform: scale(0.3) rotateY(-180deg);
  }
  100% {
    transform: scale(0.3) rotateY(-0);
  }
}
}
  `