import { Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.css']
})
export class WarningModalComponent implements OnInit {

  @ViewChild('basicModal') modal;
  @Input() modalHeading: string;
  @Input() modalBodyContent: string;
  @Input() modalPrimaryColor: string;
  @Output() onConfirmBtnClick : EventEmitter<any> = new EventEmitter();
  @Input() confirmBtnText: string;
  @Input() closeBtnText : string;
  @Input() confirmBtnShow : boolean;
  
  constructor( private dataServices : DataService) {}

  ngOnInit() {
    this.dataServices.setModalInstance(this.modal);
  }

  confirmButtonClickedEvent() {
    this.onConfirmBtnClick.emit();
  }

}
