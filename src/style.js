import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    .main-wrapper {
      min-height: 100vh;
    }

    .separate {
      padding: 5px 0;
    }
    .ellipsis{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }`