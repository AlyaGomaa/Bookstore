import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-produce-alerts',
  templateUrl: './produce-alerts.component.html',
  styleUrls: ['./produce-alerts.component.css']
})
export class ProduceAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
