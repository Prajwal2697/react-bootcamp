import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement('h1',"","helloworld");

const heading1 = React.createElement("div",{id:"title"},[
    React.createElement("h2",{id:"headin1"},"learning js and react"),
    React.createElement("h3",{title:"heading"},"this is react bootcamp")
])


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(heading1)