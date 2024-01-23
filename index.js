const P = (...txt) => txt.map((t, p) => ((p = document.createElement("p")), (p.innerText = t), p)),
  list = document.querySelector("section"),
  add = (p, ...app) => p.forEach((c, i) => (app[0] ? list.insertAdjacentElement(app[i] || app[0], c) : list.appendChild(c))),
  inner = (...txt) => txt.map((t) => (list.innerHTML += `<p>${t}</p>`)) && console.log(list),
  rep = (t, txt, c, d = document.querySelector(t)) => (c) => c >= 0 ? d.replaceChild(txt[0], d.children[c]) : (d.innerText = txt);

add(P("Earn another million dollars.")), add(P("Move to a exotic place."), "beforeend"), inner("Learn cooking better.");
add(P("Find a meaningful job.", "Travel to majority of all countries on earth.", "Take driver license!"));
console.log(`${list.nodeName} contains ${list.childElementCount} elements...`), rep("h2", "Daniels"), rep(list.nodeName, 
P("Find happiness."), 1), rep(list.nodeName, P("Learn painting and cooking."), ~~(list.childElementCount / 2)), list.removeChild(list.lastChild);
