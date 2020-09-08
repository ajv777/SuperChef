export class Recipes {
  id: number;
  image: string;
  imageType: string;
  title: string;

  constructor(pId: number, pImage: string, pImageType: string, pTitle: string) {
    this.id = pId;
    this.image = pImage;
    this.imageType = pImageType;
    this.title = pTitle;
  }
}
