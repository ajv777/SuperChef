export class Recipe {
  id: number;
  image: string;
  title: string;
  readyInMinutes: number;

  constructor(
    pId: number,
    pImage: string,
    pTitle: string,
    pReadyInMinutes: number
  ) {
    this.id = pId;
    this.image = pImage;
    this.title = pTitle;
    this.readyInMinutes = pReadyInMinutes;
  }
}
