import Duck from "./animals/duck/Duck";
import MallardDuck from "./animals/duck/MallardDuck";
import RubberDuck from "./animals/duck/RubberDuck";

const separator = "\n--------------------------------------------------\n";

function execute() {
  const ducks = [new MallardDuck(), new Duck(), new RubberDuck()];

  ducks.forEach((duck) => {
    console.log(separator);

    duck.display().performFly().performQuack();
  });
}

execute();
console.log(separator);
