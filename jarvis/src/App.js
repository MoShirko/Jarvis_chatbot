const App = () => {
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message:"hello how are you?",
      }),
      headers : {
        "Content-Type" : "application/json"
      }
    };

    try {
      const response = await fetch("http://localhost:8000/completions", options);
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  };
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
            <input />
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
