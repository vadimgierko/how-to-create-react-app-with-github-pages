import CONTENT from "./content";

function App() {
  return (
    <div className="container-sm">
      <h1 style={{textAlign: "center"}}>{CONTENT.title}</h1>
      {CONTENT.steps.map((step, i) => 
        <div key={"step" + i} >
          <h3 className="text-center">{i + 1}. {step.title}</h3>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6"><ul>{step.content.map((item, n) => <li key={"li" + n}>{item}</li>)}</ul></div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
