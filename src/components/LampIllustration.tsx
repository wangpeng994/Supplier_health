import {
  imgImage335,
  imgImage339,
  imgImage340,
  imgImage341,
} from "../assets";
import type { LampLevel } from "../data/suppliers";

interface LampIllustrationProps {
  lamp: LampLevel;
  size: 22 | 48;
}

export function LampIllustration({ lamp, size }: LampIllustrationProps) {
  const sizeClass = size === 22 ? "size-[22px]" : "size-[48px]";

  if (lamp === "黑灯") {
    return (
      <div className={`relative shrink-0 ${sizeClass}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[124%] left-[-31.17%] max-w-none top-[-12%] w-[165.33%]"
            src={imgImage339}
          />
        </div>
      </div>
    );
  }

  if (lamp === "红灯") {
    return (
      <div className={`relative shrink-0 ${sizeClass}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[120%] left-[-29.97%] max-w-none top-[-11%] w-[160%]"
            src={imgImage340}
          />
        </div>
      </div>
    );
  }

  if (lamp === "黄灯") {
    return (
      <div className={`relative shrink-0 ${sizeClass}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[120%] left-[-30%] max-w-none top-[-9%] w-[161.62%]"
            src={imgImage341}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative shrink-0 ${sizeClass}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-[120%] left-[-29.64%] max-w-none top-[-11.53%] w-[160%]"
          src={imgImage335}
        />
      </div>
    </div>
  );
}
