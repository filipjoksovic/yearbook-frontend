import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Conversation } from '../conversation';
import { Message } from '../message';
import { User } from '../user';

const user1 = new User({
  id: '1',
  name: 'User 1',
  image_url: 'https://picsum.photos/200',
  email: 'user1@email.com',
  password: '123456',
});
const user2 = new User({
  id: '2',
  name: 'User 2',
  image_url: 'https://picsum.photos/200',
  email: 'user2@email.com',
  password: '123456',
});

const conversations: Conversation[] = [
  new Conversation({
    id: '1',
    image_url: 'https://picsum.photos/200',
    participant_ids: ['1', '2'],
    participants: [user1, user2],
    messages: [
      new Message({
        id: '1',
        conversation_id: '1',
        sender_id: '1',
        text: 'Hello',
        timestamp: '2020-01-01 12:00:00',
      }),
      new Message({
        id: '2',
        conversation_id: '1',
        sender_id: '2',
        text: 'Hi',
        timestamp: '2020-01-01 12:00:00',
      }),
      new Message({
        id: '3',
        conversation_id: '1',
        sender_id: '1',
        text: 'How are you?',
        timestamp: '2020-01-01 12:00:00',
      }),
      new Message({
        id: '4',
        conversation_id: '1',
        sender_id: '2',
        text: 'I am fine, thanks',
        timestamp: '2020-01-01 12:00:00',
      }),
    ],
  }),
];
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  public getMessages(id: number): Observable<Conversation> {
    return of(conversations[0]);
  }
}
