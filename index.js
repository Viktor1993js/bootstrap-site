function Tooltip () {
    this.tooltip = document.createElement("div");
    this.tooltip.style.visibility = "hidden";
    this.tooltip.style.position = "absolute";
    this.tooltip.className = "mytooltip";
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

window.addEventListener("load", function () {
    let p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++) {
        p[i].addEventListener("mousemove", moveHandler);
        p[i].addEventListener("mouseout", outHandler);
    }
})

let k = new Tooltip();

function moveHandler (e) {
    if (!e) e = window.event;
    k.show("This is tooltip", e.clientX + 20, e.pageY + 20);
}

function outHandler () {
    k.hide();
}
