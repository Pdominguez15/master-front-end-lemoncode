import { Injectable } from "@angular/core";

//Modelo
import { ImageEntity } from "../models/ImageEntity";

@Injectable({
  providedIn: "root",
})
export class GaleryService {
  imagesList: ImageEntity[];
  imageSelected: ImageEntity;
  width: number;
  quantity: number;
  maxQuantity: number;
  interval;

  constructor() {
    this.imagesList = [
      {
        id: "1",
        src: "assets/galeria/angular.jpeg",
        title: "Angular",
      },
      {
        id: "2",
        src: "assets/galeria/blazor.png",
        title: "Blazor",
      },
      {
        id: "3",
        src: "assets/galeria/cypress.png",
        title: "Cypress",
      },
      {
        id: "4",
        src: "assets/galeria/gatsby.png",
        title: "Gastby",
      },
      {
        id: "5",
        src: "assets/galeria/graphql.png",
        title: "Graphql",
      },
      {
        id: "6",
        src: "assets/galeria/jest.jpg",
        title: "Jest",
      },
      {
        id: "7",
        src: "assets/galeria/react.png",
        title: "React",
      },
      {
        id: "8",
        src: "assets/galeria/vue.jpeg",
        title: "Vue",
      },
    ];

    this.imageSelected = this.imagesList[0];

    this.width = 400;
    this.quantity = 50;
    this.maxQuantity = 600;
  }

  ngOnInit(): void {}

  searchImage() {
    const imageSelectedPosition = this.imagesList.findIndex(
      (image) => image.id === this.imageSelected.id
    );
    return imageSelectedPosition;
  }

  isFirst() {
    const newIndex = this.searchImage() - 1;

    if (newIndex < 0) {
      return true;
    } else {
      return false;
    }
  }

  isLast() {
    const newIndex = this.searchImage() + 1;

    if (newIndex <= this.imagesList.length - 1) {
      return false;
    } else {
      return true;
    }
  }

  previous() {
    const newIndex = this.searchImage() - 1;

    if (newIndex >= 0) {
      this.imageSelected = this.imagesList[newIndex];
    }
  }

  next() {
    const newIndex = this.searchImage() + 1;

    if (newIndex <= this.imagesList.length - 1) {
      this.imageSelected = this.imagesList[newIndex];
    }
  }

  increase() {
    const newQuantity = this.width + this.quantity;
    if (newQuantity <= this.maxQuantity) {
      this.width = newQuantity;
    }
  }

  decrease() {
    const newQuantity = this.width - this.quantity;
    if (newQuantity > 0) {
      this.width = newQuantity;
    }
  }

  isMinimun() {
    if (this.width === this.quantity) {
      return true;
    } else {
      return false;
    }
  }

  isMaximun() {
    if (this.width === this.maxQuantity) {
      return true;
    } else {
      return false;
    }
  }

  getWidth() {
    return this.width;
  }

  getImageSelected() {
    return this.imageSelected;
  }

  getImageList() {
    return this.imagesList;
  }

  setImageSelected(id: string) {
    const newImageSelected = this.imagesList.find((image) => image.id === id);
    this.imageSelected = newImageSelected;
  }

  play() {
    this.interval = setInterval(() => {
      const newIndex = this.searchImage() + 1;

      if (newIndex <= this.imagesList.length - 1) {
        this.imageSelected = this.imagesList[newIndex];
      } else {
        this.imageSelected = this.imagesList[0];
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}
