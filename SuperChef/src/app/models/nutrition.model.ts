export class Nutrition {
  percentCarbs: number;
  percentFat: number;
  percentProtein: number;

  constructor(
    pPercentCarbs: number,
    pPercentFat: number,
    pPercentProtein: number
  ) {
    this.percentCarbs = pPercentCarbs;
    this.percentFat = pPercentFat;
    this.percentProtein = pPercentProtein;
  }
}
