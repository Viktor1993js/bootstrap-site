function Tooltip () {
    this.tooltip = document.createElement("div");
    this.tooltip.style.visibility = "hidden";
    this.tooltip.style.position = "absolute";
    this.tooltip.className = "mytooltip";
    this.tooltip.style.zIndex = 1000;
}

Tooltip.prototype.show = function (text, x, y) {
    this.tooltip.innerHTML = text;
    this.tooltip.style.visibility = "visible";
    this.tooltip.style.left = x + "px";
    this.tooltip.style.top = y + "px";

    if (this.tooltip.parentNode != document.body) {
        document.body.appendChild(this.tooltip);
    }
}

Tooltip.prototype.hide = function () {
    this.tooltip.style.visibility = "hidden";
}

window.addEventListener("load", function (){
    let p = document.getElementsByTagName("p");
    let button = document.getElementsByTagName("button");
    let a = document.getElementsByTagName("a");
    for (let i = 0; i < p.length; i++) {
        p[i].addEventListener("mousemove", moveHandler);
        p[i].addEventListener("mouseout", outHandler);
    }
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("mousemove", moveHandlerButton);
        button[i].addEventListener("mouseout", outHandler);
    }
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener("mousemove", moveHandlerButton);
        a[i].addEventListener("mouseout", outHandler);
    }
})

let tooltip = new Tooltip();

function moveHandler (e) {
    if (!e) e = window.event;
    tooltip.show("This is text", e.clientX + 15, e.pageY + 15);
}

function outHandler () {
    tooltip.hide();
}

function moveHandlerButton (e) {
    if (!e) e = window.event;
    tooltip.show("Click me", e.clientX + 15, e.pageY + 15);
}
