import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  commenetLink:string;
  errorMessage: string;
  constructor(private http: HttpClient) { }

  getRedditPage():any{
   return this.http.get('https://www.reddit.com/.json');
  }

  getCommentPage(url):any{
    return this.http.get('https://www.reddit.com' + url)
  }
  
  nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  }
}
