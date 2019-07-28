import { Component, OnInit } from '@angular/core';
import { RedditService } from '../../reddit.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  homePageDetails = [];
  constructor(public redditService: RedditService, private router :Router) { }

  ngOnInit() {
    this.getHomePageData();
  }

  getHomePageData() {
    this.redditService.getRedditPage().subscribe((result) => {
      this.homePageDetails = result
    },(error)=>{
      this.redditService.errorMessage = 'Sorry! somethig went wrong. Please try again'
    }
  );
  }

  openCommentsPage(event){
    if(event && event.key){
      this.redditService.commenetLink = event.value;
      this.router.navigate(['/comments'])
    }
  }
  
}
