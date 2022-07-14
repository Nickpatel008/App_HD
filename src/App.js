import React , { useState } from "react";
import "./Assets/CSS/style.css";
import PrivateRoutes from "./components/common/PrivateRoutes";
import Layout from "./components/Layout";

function App() {
  const [isPath, setIsPath] = useState([]);
  const handlePath = (handlePath) => {
    // setIsPath(handlePath);
    isPath.push(handlePath);
  };

  return (
    <div className="App">
      <Layout isPath={isPath}>
        <PrivateRoutes handlePath={handlePath} />
      </Layout>
    </div>
  );
}

export default App;
