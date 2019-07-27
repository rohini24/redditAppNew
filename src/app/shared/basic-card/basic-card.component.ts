import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RedditService } from '../../reddit.service';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.css']
})
export class BasicCardComponent implements OnInit {
  @Input() config;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();
  constructor(public redditService: RedditService) { }

  ngOnInit() {
  }

  openComment(url:string){
    this.clickEvent.emit({key:true, value: url});
  }

}
