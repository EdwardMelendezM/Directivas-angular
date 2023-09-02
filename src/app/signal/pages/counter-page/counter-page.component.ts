import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  public counter = signal(10)
  public squareCounter = computed(()=>this.counter()*this.counter())
  onAdd(value: number = 1) {
    this.counter.update(current => current + value)
  }

  onRest(value: number = 1) {
    this.counter.update(current => current - value)
  }

  onReset() {
    this.counter.set(0)
  }
}
