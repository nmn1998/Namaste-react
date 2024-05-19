const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

// making Element using createElement and providing it to root using render function which converts it to DOM element
// nested Element
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, 'I am H1'),
    React.createElement("h2", { id: "h2" }, 'I am H2'),
  ])
);

console.log(parent); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
