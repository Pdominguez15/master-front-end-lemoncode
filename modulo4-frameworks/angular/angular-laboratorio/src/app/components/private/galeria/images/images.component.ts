import { Component, OnInit } from "@angular/core";

//Servicio
import { GaleryService } from "src/app/services/galery.service";

@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.scss"],
})
export class ImagesComponent implements OnInit {
  constructor(private _service: GaleryService) {}

  ngOnInit(): void {}

  changeImageSelected(id: string) {
    this._service.setImageSelected(id);
  }

  getWidth() {
    const width = this._service.getWidth();

    const style = {
      width: width + "px",
    };

    return style;
  }

  getImageSelected() {
    return this._service.getImageSelected();
  }

  getImageList() {
    return this._service.getImageList();
  }
}
