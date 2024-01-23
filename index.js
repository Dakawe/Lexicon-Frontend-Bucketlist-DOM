function add(child, parent, text, appendstyle) {
  child = document.createElement(child);
  parent = document.querySelector(parent);
  child.innerText = text;

  appendstyle ? parent.insertAdjacentElement(appendstyle, child) : parent.appendChild(child);
}

p1 = add("p", "section", "Paragraph: appendChild", "");
p2 = add("p", "section", "Paragrap: insertAdjacentElement", "beforeend");

let allP = document.querySelector(".list");

// allP.innerHTML = "<p>Added with innerHTML, WHERE DID MY LAST TEXT GO!?</p>"; <- REMOVES THE EARLIER DATA AND ADD THIS STRING INSTEAD IN HTML DOC

allP.innerHTML += "<p>Added with innerHTML</p>"; // <- This adds the new data with the old data in doc.

["LOOPED Text 1", "LOOPED Text 2", "LOOPED Text 3"].map((txt) => (allP.innerHTML += `<p>${txt}</p>`)); // Neat little mapping on the array' ye!

console.log(allP.children.length); // CONSOLE LOGS number of children in bucketlist

const newname = document.querySelector("h2");
newname.innerText = "Daniel Westergrens";

newchild = document.createElement("b");
newchild.innerText = "Im the new child on top!";
oldchild = allP.children[0];
allP.replaceChild(newchild, oldchild);

newchild = document.createElement("b");
newchild.innerText = "IM TOTALLY MIDDLECLASS";
oldchild = allP.children[~~(allP.children.length / 2)]; // The ol' ~~ cute lil trick. Math ftw. If postive int's. ^^
allP.replaceChild(newchild, oldchild);

allP.removeChild(allP.lastChild); // Byebye mr Last P guy!
