import Duck from "./Duck";
import FlyRocketPower from "./behaviors/fly/FlyRocketPowerBehavior";

class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyRocketPower();
  }

  display() {
    console.log("[🦆] Displaying Duck of type: MALLARD");
    return this;
  }
}

export default MallardDuck;
