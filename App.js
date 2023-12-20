const heading=React.createElement("div",{id : "parent"},
        React.createElement("div",{id : "child"},
        React.createElement("h1",{}," i am h1 heading")));
console.log(heading)
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
