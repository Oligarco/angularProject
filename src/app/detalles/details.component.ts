import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() character: any = null;
  @Output() close = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  onClose(){
    this.close.emit();
  }

}
