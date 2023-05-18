import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message:value,
      }),
      headers : {
        "Content-Type" : "application/json"
      }
    };

    try {
      const response = await fetch("http://localhost:8000/completions", options);
      const data = await response.json()
      setMessage(data.choices[0].message)
    } catch (error) {
      console.error(error)
    }
  };

  console.log('value', value)
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
          <li>bluh</li>
        </ul>
        <nav>
          <p>Made by Mo & Shir</p>
        </nav>
      </section>
      <section className="main">
        <h1>Jarvis the chabot</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <div id="submit" onClick={getMessages}>
              ➢
            </div>
          </div>
          <p className="info">
            Introducing Jarvis, an advanced AI-powered language model inspired
            by OpenAI's ChatGPT. Built on cutting-edge technology, this digital
            assistant is designed to engage users in meaningful, interactive
            conversations across a wide range of topics.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
