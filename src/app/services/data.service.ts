import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mdbWaringModalService: any;
  constructor() { }

  setModalInstance(instance) {
    this.mdbWaringModalService = instance;
  }
  getModalInstance() {
    return this.mdbWaringModalService;
  }

}
