import FlyBehavior from "./behaviors/fly/FlyBehavior";
import QuackBehavior from "./behaviors/quack/QuackBehavior";

class Duck {
  protected quackBehavior: QuackBehavior;
  protected flyBehavior: FlyBehavior;

  constructor() {
    this.quackBehavior = new QuackBehavior();
    this.flyBehavior = new FlyBehavior();
  }

  public display(): Duck {
    console.log("[🦆] Displaying Duck of type: NORMAL");
    return this;
  }

  public performFly(): Duck {
    this.flyBehavior.fly();
    return this;
  }

  public performQuack(): Duck {
    this.quackBehavior.quack();
    return this;
  }
}

export default Duck;
