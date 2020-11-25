import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
})
export class TopicListComponent implements OnInit {
  @Input() topic;
  @Input() charities = [];
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap
    .pipe(map(() => window.history.state)).subscribe(data => {
      this.topic = data.topic;
      this.charities = data.charities;
    });
  }
  goToCharityDetails() {
    // this.router.navigateByUrl('/')
  }
}
