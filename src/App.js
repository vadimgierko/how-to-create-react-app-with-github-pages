import CONTENT from "./content";

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>{CONTENT.title}</h1>
      {CONTENT.steps.map((step, i) => 
        <div key={"step" + i} >
          <h3>{i + 1}. {step.title}</h3>
          <ul>{step.content.map((item, n) => <li key={"li" + n}>{item}</li>)}</ul>
        </div>
      )}
    </div>
  );
}

export default App;
