import React, { useState, useEffect } from "react";
import MainPage from "./mainPage";
import LoadingPage from "./components/loadingPage";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingPage /> : <MainPage />;
};

export default App;
