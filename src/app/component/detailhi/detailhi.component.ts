import { Component, OnInit } from '@angular/core';
import { HiService } from 'src/app/hi.service';


@Component({
  selector: 'app-detailhi',
  template: `
    <ul *ngFor="let user of User">
        <li>{{user.name}}: {{user.age}}</li>
    </ul>
  `,
  styleUrls: ['./detailhi.component.css']
})
export class DetailhiComponent implements OnInit {

  constructor( private _hiService : HiService) {}

  public User = [];

  ngOnInit() {
    this.User = this._hiService.getUser();
  }

}
