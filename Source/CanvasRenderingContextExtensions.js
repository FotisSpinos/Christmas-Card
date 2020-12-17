CanvasRenderingContext2D.prototype.drawText = function (text, x, y, color, fill = false, font = "60px Arial") {
    this.fillStyle = color == "" ? "#FF0000" : color;

    this.font = font;
    
    if (fill) this.fillText(text, x, y);
    else this.strokeText(text, x, y); 
}

CanvasRenderingContext2D.prototype.drawFullCircle = function (x, y, radius, fill = false, color = "") {
    this.fillStyle = color == "" ? "#FF0000" : color;

    this.beginPath();
    this.arc(x, y, radius, 0, 2 * Math.PI);
    this.stroke();

    if (fill) this.fill();
}

CanvasRenderingContext2D.prototype.clearCanvas = function (canvas) {
    this.clearRect(0, 0, canvas.width, canvas.height)
}

CanvasRenderingContext2D.prototype.clearCanvas = function () {
    this.clearRect(0, 0, canvas.width, canvas.height)
}