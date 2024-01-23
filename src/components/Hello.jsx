const name = "Renzo";

function displayMessage() {
  return "Wow";
}

function Hello(props) {
  return (
    <div>
      <h1>Hello! {props.message} {props.name} {displayMessage()}</h1>
      <h1>Another element</h1>
    </div>
  );
}

// export always component to display component when you simport
export default Hello;
