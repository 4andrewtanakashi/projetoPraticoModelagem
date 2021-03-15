import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() message: string;
  @Input() buttonText: string;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    this.buttonClick.emit();
  }
}
