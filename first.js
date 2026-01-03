let box = document.createElement("div");
box.setAttribute("class","box1");
box.style.height="300px";
box.style.width = "250px";
box.style.background = "rgba(255, 255, 255, 0.15)";
box.style.backdropFilter = "blur(9px)";
box.style.borderRadius = "15px";
box.style.margin = "200px 0px 0px 500px"
box.style.boxShadow = "0px 0px 10px #ff03afff"
let body = document.querySelector("body");
body.append(box)
