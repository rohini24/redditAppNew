import { Component, OnInit } from '@angular/core';
import { RedditService } from '../../reddit.service';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit {
  
  commentsData=[];
  showReplies = 4;
  constructor(public redditService: RedditService) { }

  ngOnInit() {
    this.redditService.getCommentPage(this.redditService.commenetLink).subscribe(result=>{
      this.commentsData = result;
    });
  }
  showMoreReplies(){
    this.showReplies *=4;
  }
}
