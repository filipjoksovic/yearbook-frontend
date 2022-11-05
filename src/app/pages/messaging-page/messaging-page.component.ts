import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Conversation } from 'src/app/conversation';
import { Message } from 'src/app/message';
import { MessageService } from 'src/app/services/message.service';
import { TitleService } from 'src/app/services/title.service';
import { User } from 'src/app/user';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-messaging-page',
  templateUrl: './messaging-page.component.html',
  styleUrls: ['./messaging-page.component.scss'],
})
export class MessagingPageComponent implements OnInit {
  public conversation: Conversation;
  public user: User;
  public messages: Message[];

  @ViewChild('messageInput') messageInput: ElementRef;
  @ViewChild('container') container: ElementRef;

  constructor(
    private messageService: MessageService,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.messageService.getMessages(1).subscribe((messages) => {
      this.conversation = messages;
      console.log(this.conversation);
      this.messages = messages.messages;

      this.user = this.conversation.participants[0];
      this.titleService.setUser(this.user);
    });
  }
  ngOnDestroy(): void {
    this.titleService.setUser(null);
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  public sendMessage() {
    const message: Message = new Message({
      id: this.messages.length + 1,
      text: this.messageInput.nativeElement.value,
      timestamp: '2020-10-10',
      sender_id: 1,
    });
    console.log(message);
    this.messages.push(message);
    this.messageInput.nativeElement.value = '';
  }

  public scrollToBottom() {
    this.container.nativeElement.scrollTop =
      this.container.nativeElement.scrollHeight;
  }
}
