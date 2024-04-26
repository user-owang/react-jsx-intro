const FirstComponent = () => <h1>My very first component</h1>;

const NamedComponent = (props) => <p>My name is {props.name}</p>;

const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Joe" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
