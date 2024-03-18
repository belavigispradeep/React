// const headding = React.createElement(
//   "h1",
//   { id: "headding" },
//   "Hello world..!"
// );

const para = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello Bhai"),
    React.createElement("h2", {}, "I am a child of div"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello Bro..!"),
    React.createElement("h2", {}, "I am a child of div"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(para);
