import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection {
    background-color: ${({ theme }) => `${theme.main}87`};
  }

  body {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: Inter, BlinkMacSystemFont, -apple-system, Roboto, 'Segoe UI', 'Open Sans', Helvetica, Arial, sans-serif;
    transition: all 150ms ease;
  }

  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  small {
    display: block;
  }

  button {
    display: block;
  }

  a {
    font-family: Inter, Roboto, 'Segoe UI', Helvetica, Arial, sans-serif;
    color: ${({ theme }) => theme.text};

    &:hover {
      color: ${({ theme }) => theme.main};
    }

  }

  img {
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Inter, Roboto, 'Segoe UI', 'Open Sans', Helvetica, Arial, sans-serif;
  }

  form, label, input, textarea, button, select, option {
    font-family: Inter, Roboto, 'Segoe UI', 'Open Sans', Helvetica, Arial, sans-serif;
  }
`;
