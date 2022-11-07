import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from '../../conversation';

@Component({
  selector: 'app-chat-row',
  templateUrl: './chat-row.component.html',
  styleUrls: ['./chat-row.component.scss'],
})
export class ChatRowComponent implements OnInit {
  @Input()
  public conversation: Conversation;
  constructor() {}

  ngOnInit(): void {
    console.log(this.conversation);
  }
}
