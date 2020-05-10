class Snake {
  constructor(width, height, direction) {
    this.width = width || 20;
    this.height = height || 20;
    this.direction = direction || "right";
    this.body = [
      {
        x: 4,
        y: 2,
        color: "black",
      },
    ];
    this.bodyPartsDom = [];
  }
  init(map) {
    this.removeBodyParts();
    for (let i = 0; i < this.body.length; i++) {
      const obj = this.body[i];
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.width = this.width + "px";
      div.style.height = this.height + "px";
      div.style.left = obj.x * this.width + "px";
      div.style.top = obj.y * this.height + "px";
      div.style.backgroundColor = obj.color;
      map.appendChild(div);
      this.bodyPartsDom.push(div);
    }
  }
  removeBodyParts() {
    for (let idx = 0; idx < this.bodyPartsDom.length; idx++) {
      const div = this.bodyPartsDom[idx];
      div.remove();
    }
  }
  move() {
    var i = this.body.length - 1;
    for (; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    switch (this.direction) {
      case "left":
        this.body[0].x--;
        break;
      case "right":
        this.body[0].x++;
        break;
      case "top":
        this.body[0].y--;
        break;
      case "bottom":
        this.body[0].y++;
        break;
    }
  }
}
