import ReactDOM from 'react-dom/client';


const name="Amit kapoor";

const add=(fn,sn)=>fn+sn;
const element=<h1>Hello, {name}. {10+2}.. testing :  {add(30,20)} </h1>;






const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(element);