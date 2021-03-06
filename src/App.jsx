// React 관련 라이브러리
import React from 'react';

// react-router-dom 관련 라이브러리
import { Route, Routes } from 'react-router-dom';

// styled-components 관련 라이브러리
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';

// style 관련 파일
import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
