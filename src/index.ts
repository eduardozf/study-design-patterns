import Duck from "./animals/duck/Duck";

function execute() {
  const duck = new Duck();

  duck.display().performFly().performQuack();
}

console.clear();
execute();
