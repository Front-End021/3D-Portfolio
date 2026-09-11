declare module "gsap-trial/SplitText" {
  export class SplitText {
    words: HTMLElement[];
    chars: HTMLElement[];
    lines: HTMLElement[];
    constructor(target: any, vars?: any);
    revert(): void;
  }
}
