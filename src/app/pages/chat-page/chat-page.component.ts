import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Conversation } from 'src/app/conversation';
import { ConversationService } from 'src/app/services/conversation.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit {
  constructor(private conversationService: ConversationService) {}

  private _conversations: Conversation[];

  public get conversations() {
    return this._conversations;
  }
  public set conversations(value: Conversation[]) {
    this._conversations = value;
  }

  ngOnInit(): void {
    this.conversationService.getConversations(1).subscribe((conversations) => {
      console.log(conversations);
      this._conversations = conversations;
    });
  }
}
