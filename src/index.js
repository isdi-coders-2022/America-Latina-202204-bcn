import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AlbumProvider from "./store/contexts/AlbumProvider";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";
import "@fontsource/open-sans";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Container = styled.div`
  width: 95vw;
`;
root.render(
  <React.StrictMode>
    <AlbumProvider>
      <BrowserRouter>
        <Container>
          <App />
        </Container>
      </BrowserRouter>
    </AlbumProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
