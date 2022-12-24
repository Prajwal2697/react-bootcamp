const head = document.createElement('h1');
head.innerHTML="this is plain js";

const para = document.createElement('h2');
para.innerHTML='Hello js world';
head.appendChild(para)

const root = document.getElementById('root');

root.appendChild(head);