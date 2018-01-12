import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-main-content',
  host: {
    class: 'main-content'
  },
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnInit {

  myContent: {
    pathArg: string,
    title: string,
    content: string
  };
  
  content = {
    // hash key is path
    'home' : {
      title: 'Home Page',
      content: "Home Page Content"
    },
    '1': {
      title: 'Title One',
      content: 'Content One'
    },
    '2': {
      title: 'Title Two',
      content: 'Content Two'
    },
    '3': {
      title: 'Title Three',
      content: 'Content Three'
    },
    '4': {
      title: 'Title Four',
      content: 'Content Four'
    },
    '5': {
      title: 'Title Five',
      content: 'Content Five'
    },
    '6': {
      title: 'Title Six',
      content: 'Content Six'
    },
  };
  pathArg: string;
  paramsSubscription: Subscription;
  
  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    
    this.pathArg = this.route.snapshot.params['page'];
    this.myContent = this.content[this.pathArg];
    this.paramsSubscription = this.route.params
      .subscribe(
        (params) => this.myContent = this.content[params['page']]
      );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
