// const heading=React.createElement("h1",{id:"heading"},"hii i am medha and try to learn react");
// //console.log(heading);---->object
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
/*<div id="parent">
    <div id="child"> 
        <h1></h1>
    </div>
</div>
 
*/ /*const parent=React.createElement("div",
    {id:"parent"},
    React.createElement("div",
        {id:"child"},
        React.createElement("h1",{},"hii i am inside child")));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/ /*<div id="parent">
    <div id="child"> 
        <h1>i am in h1 tag</h1>
        <h2> i am in h2 tag</h2>
    </div>
</div>
 
*/ /*
const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
       [ React.createElement("h1",{},"I am in h1 tag"),React.createElement("h2",{},"I am in h2 tag")]
    )
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/ /*<div id="parent">
    <div id="child"> 
        <h1>i am in h1 tag</h1>
        <h2> i am in h2 tag</h2>
    </div>
     <div id="child"> 
        <h1>i am in h1 tag</h1>
        <h2> i am in h2 tag</h2>
    </div>
</div>
 */ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "i am in h1 child 1"),
        React.createElement("h2", {}, "i am in h2 child 1")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "i am in h1 child 2"),
        React.createElement("h2", {}, "i am in h2 child 2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
