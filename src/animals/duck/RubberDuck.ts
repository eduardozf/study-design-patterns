import Duck from "./Duck";
import NoFlyBehavior from "./behaviors/fly/NoFlyBehavior";
import SqueakBehavior from "./behaviors/quack/SqueakBehavior";

class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new NoFlyBehavior();
    this.quackBehavior = new SqueakBehavior();
  }

  display() {
    console.log("[🦆] Displaying Duck of type: RUBBER");

    return this;
  }
}

export default RubberDuck;
