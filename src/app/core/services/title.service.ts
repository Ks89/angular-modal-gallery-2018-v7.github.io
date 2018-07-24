import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  titleEvent: EventEmitter<string> = new EventEmitter<string>();
}
