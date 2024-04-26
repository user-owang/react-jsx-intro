const Tweet = ({ date, message, name, username }) => (
  <div className="tweet">
    <span>
      <b>{name}</b>
    </span>
    <span className="username">{username}</span>
    <span className="date">{date}</span>
    <p>{message}</p>
  </div>
);

const App = () => (
  <div>
    <Tweet
      name="Joe"
      username="@joe_mama420"
      message="knock knock"
      date="4/20/24"
    />
    <Tweet
      name="Goblin"
      username="@goblin_deez6969"
      message="I love peanuts"
      date="1/20/24"
    />
    <Tweet
      name="Brandon"
      username="@joe_byron"
      message="LET'S GO!"
      date="6/9/23"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
