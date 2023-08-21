import Nav from "./components/Nav/Nav";
import Card from "./components/Body/Card";
import "./App.css";
import { getData } from "./api/api-service";
import { useState, useEffect } from "react";

function App() {
  const [postagens, setPostagens] = useState([]);
  useEffect(() => {
    getData().then((postagens) => {
      setPostagens(postagens);
    });
  }, []);

  return (
    <>
      <header className="bg-gradient">
        <Nav />
      </header>

      <div className="container container-cards">
        {postagens.map((post: string | string[] | any) => (
          <Card title={post.title} label={post.label} />
        ))}
      </div>
    </>
  );
}

export default App;
