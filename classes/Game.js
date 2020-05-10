class Player {
  constructor(containerDOM) {
    this.snake = new Snake();
    this.map = containerDOM;
    this.speed = 200;
  }
  init() {
    this.bindKey();
    this.runSnake(this.map);
  }
  runSnake(map) {
    const self = this;
    console.log(self);
    const timerId = setInterval(function () {
      self.snake.move(function () {});
      self.snake.init(map);
      const maxX = map.offsetWidth / self.snake.width;
      const maxY = map.offsetHeight / self.snake.height;
      const headX = self.snake.body[0].x;
      const headY = self.snake.body[0].y;
      if (headX >= maxX || headX < 0) {
        clearInterval(timerId);
        alert("You died :(");
      }
      if (headY < 0 || headY >= maxY) {
        clearInterval(timerId);
        alert("You died :(");
      }
    }, this.speed);
  }
  bindKey() {
    const self = this;
    document.addEventListener(
      "keydown",
      function (e) {
        switch (e.keyCode) {
          case 37:
            self.snake.direction = "left";
            break;
          case 38:
            self.snake.direction = "top";
            break;
          case 39:
            self.snake.direction = "right";
            break;
          case 40:
            self.snake.direction = "bottom";
            break;
        }
      },
      false
    );
  }
}
