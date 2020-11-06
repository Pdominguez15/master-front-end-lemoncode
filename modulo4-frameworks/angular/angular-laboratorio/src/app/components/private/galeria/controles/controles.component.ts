import { Component, OnInit, Output, EventEmitter } from "@angular/core";

//Servicio
import { GaleryService } from "src/app/services/galery.service";

@Component({
  selector: "app-controles",
  templateUrl: "./controles.component.html",
  styleUrls: ["./controles.component.scss"],
})
export class ControlesComponent implements OnInit {
  @Output()
  increase: EventEmitter<number> = new EventEmitter();
  @Output()
  decrease: EventEmitter<number> = new EventEmitter();

  playGalery: boolean;

  constructor(private _service: GaleryService) {
    this.playGalery = false;
  }

  ngOnInit(): void {}

  isFirst() {
    return this._service.isFirst();
  }

  isLast() {
    return this._service.isLast();
  }

  previous() {
    this._service.previous();
  }

  next() {
    this._service.next();
  }

  isMaximun() {
    return this._service.isMaximun();
  }

  isMinimun() {
    return this._service.isMinimun();
  }

  toIncrease() {
    this._service.increase();
  }

  toDecrease() {
    this._service.decrease();
  }

  play() {
    if (!this.playGalery) {
      this._service.play();
      this.playGalery = true;
    } else {
      this._service.stop();
      this.playGalery = false;
    }
  }
}
