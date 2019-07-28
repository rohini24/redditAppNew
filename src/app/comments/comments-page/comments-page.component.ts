import { Component, OnInit } from '@angular/core';
import { RedditService } from '../../reddit.service';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit {
  
  commentsData=[];
  constructor(public redditService: RedditService) { }

  ngOnInit() {
    this.redditService.getCommentPage(this.redditService.commenetLink + '/.json').subscribe(result=>{
      this.commentsData = result;
    });
  }
  openCommentsPage(event){
    if(event && event.key){
      console.log('no action')
    }
  }
}
