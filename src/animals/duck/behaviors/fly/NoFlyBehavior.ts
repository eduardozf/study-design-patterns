import FlyBehavior from "./FlyBehavior";

class NoFlyBehavior extends FlyBehavior {
  fly(): void {
    console.log("What did you expect? To fly!? 🤭");
  }
}

export default NoFlyBehavior;
