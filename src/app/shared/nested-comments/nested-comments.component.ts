import { Component, OnInit, Input } from '@angular/core';
import { RedditService } from '../../reddit.service';

@Component({
  selector: 'app-nested-comments',
  templateUrl: './nested-comments.component.html',
  styleUrls: ['./nested-comments.component.css']
})
export class NestedCommentsComponent implements OnInit {
  showReplies = 4; 
  @Input() commentsData =[];
  constructor(public redditService: RedditService) { }

  ngOnInit() {
  }
  showMoreReplies(){
    this.showReplies *=4;
  }
  getComments(url:string){
    let data = [];
    if(url){
      this.redditService.getCommentPage(url+'.json').subscribe(res=>{
        data = res;
      })
    }
    return data;
  }
}
