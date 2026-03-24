import {
  Component, Input, Output, EventEmitter,
  OnInit, OnChanges, OnDestroy, SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-child.html',
  styleUrls: ['./order-child.css']
})
export class OrderChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input() order: any;
  @Output() logEvent = new EventEmitter<string>();

  sendLog(msg: string) {
    this.logEvent.emit(msg);
  }

  ngOnInit() {
    this.sendLog("✅ ngOnInit: Component Initialized");
  }

  ngOnChanges(changes: SimpleChanges) {
    this.sendLog("🔄 ngOnChanges: Order Updated");
  }

  ngOnDestroy() {
    this.sendLog("❌ ngOnDestroy: Component Destroyed");
  }
}