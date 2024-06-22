import './App.css';
import { Helmet } from "react-helmet";
import React, { useEffect } from 'react';
import Main from './Components/Main';

function App() {


  // useEffect(() => {
  //   function suppressJSError() {
  //     return true;
  //   }
  //   window.onerror = suppressJSError;
  //   return () => {
  //     window.onerror = null;
  //   };
  // }, []);
  return (
    <>
      <Helmet>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="%PUBLIC_URL%/lib/easing/easing.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="js/main.js"></script>

      </Helmet>

      <Main />

    </>
  );
}

export default App;
