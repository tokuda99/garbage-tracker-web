import React from "react";
import { getJSON, postJSON } from "@/services/api";

const HomePage: React.FC = () => {
  React.useEffect(() => {
    getJSON();
  }, []);

  return <div>Hello World</div>;
};

export default HomePage;