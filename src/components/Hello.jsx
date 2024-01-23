const name = "Renzo";

function displayMessage() {
  return "Wow";
}

function Hello() {
  return (
    <div>
      <h1>Hello from a component! {displayMessage()}</h1>
      <h1>Another element</h1>
    </div>
  );
}

// export always component to display component when you simport
export default Hello;
