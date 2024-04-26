const Person = ({ age, hobbies, name }) => {
  const msg = age >= 18 ? <h3>Go vote!</h3> : <h3>You must be 18</h3>;
  const hobbyList = hobbies.map((hobby) => <li>{hobby}</li>);
  const nameStr = name.length > 8 ? name.slice(0, 6) : name;
  return (
    <div>
      Learn some information about this person:
      <ul>
        <li>Name: {nameStr}</li>
        <li>Age: {age}</li>
        <li>
          Hobbies:
          <ul>{hobbyList}</ul>
        </li>
      </ul>
      {msg}
    </div>
  );
};

const App = () => (
  <div>
    <Person
      name="Jesus"
      age={33}
      hobbies={["wine making", "bread baking", "associating with sinners"]}
    />
    <Person
      name="Bob Ross"
      age={50}
      hobbies={["painting", "exploring nature", "fostering squirrels"]}
    />
    <Person
      name="Abe Lincoln"
      age={100}
      hobbies={["governing", "telling the truth", "going to the theatre"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
