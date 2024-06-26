import gsap from "gsap";
import { car as car_info } from "./data/db.json";

class Car {
  data = [];

  constructor(info) {
    info ? this._create(info) : null;
  }

  _create = (info) => {
    info.forEach((car) => {
      const dom = document.querySelector(car.id);
      const effect = gsap.to(dom, {
        duration: car.duration,
        x: car.position.x,
        y: car.position.y,
        ease: car.ease,
        repeat: car.repeat,
        repeatDelay: car.repeatDelay,
        paused: true,
      });

      const audio = new Audio(`./sound/${car.sound_effect}`);
      const listener = this._addListener(dom, effect, audio);
      this.data.push({ dom, effect, listener });
    });
  };

  _addListener = (dom, effect, audio) => {
    let timer = null;
    const click = dom.addEventListener("click", () => {
      this._clearTimer(timer);
      timer = setTimeout(() => {
        effect.paused(!effect.paused());
      }, 200);
    });
    const dblclick = dom.addEventListener("dblclick", () => {
      this._clearTimer(timer);
      audio.play();
    });

    return { click, dblclick };
  };
  _clearTimer = (timer) => {
    timer && clearTimeout(timer);
  };

  play = () => {
    this.data.forEach((car) => {
      car.effect.play();
    });
  };

  paused = () => {
    this.data.forEach((car) => {
      car.effect.paused();
    });
  };
}

const car = new Car(car_info);

export { car };
