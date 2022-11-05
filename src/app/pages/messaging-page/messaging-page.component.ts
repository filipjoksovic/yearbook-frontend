import { Component, OnInit } from '@angular/core';
import { Conversation } from 'src/app/conversation';
import { Message } from 'src/app/message';
import { MessageService } from 'src/app/services/message.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-messaging-page',
  templateUrl: './messaging-page.component.html',
  styleUrls: ['./messaging-page.component.scss'],
})
export class MessagingPageComponent implements OnInit {
  public conversation: Conversation;
  public user: User;
  public messages: Message[];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages(1).subscribe((messages) => {
      this.conversation = messages;
      console.log(this.conversation);

      this.user = this.conversation.participants[0];
    });
  }
}
