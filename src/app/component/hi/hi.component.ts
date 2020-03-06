import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../Service/category.module';
import { HiService } from 'src/app/hi.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  providers: [CategoryService],
//   template: `

//     <h2>{{getUser()}}</h2>

//     <h2>{{setUrl}}</h2>


//     <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

//         <ng-template #thenBlock>
//             <h2>4444444 phuc</h2>
//         </ng-template>

//         <ng-template #elseBlock>
//             <h2>Hello Chị</h2>
//         </ng-template>

//     <div [ngSwitch]= "menu">
//         <div *ngSwitchCase="'com'">Bạn đã chọn cơm</div>
//         <div *ngSwitchCase="'canh'">Bạn đã chọn canh</div>
//         <div *ngSwitchCase="'ca'">Bạn đã chọn ca</div>
//     </div>

//     <div *ngFor="let color of colors; index as i"> // index first last even odd
//         <h2>{{i}} {{color}}</h2>
//     </div>

//     <ul *ngFor="let user of User">
//         <li>{{user.id}} - {{user.name}} - {{user.age}}</li>
//     </ul>

//     <h2>{{"Hello " + fullname}}</h2>

//     <button (click)="fireEvent()">Send Enter</button>
//  `,
  styleUrls: ['./hi.component.css']
})

 export class HiComponent implements OnInit {
     constructor( private categoryService: CategoryService, private _hiService: HiService) {
         categoryService.getCategory().subscribe(data => {
            console.log('tttt',data)

         });

     }
     public products = [];
    //  formCreate = [];

     ngOnInit() {
        this.products = this._hiService.getProducts();
     }

 }
// export class HiComponent implements OnInit {
//   public name = "Phuc"
//   public setUrl = window.location.href;
//   displayName = false;
//   public colors = ["red", "green", "blue", "yellow"]
//   public menu = "com";
//   @Input('parentData') public fullname;
//   @Output() public childEvent = new EventEmitter();
//   constructor( private _hiService: HiService) { }

//   public User = [];

//   ngOnInit() {
//         this.User = this._hiService.getUser();
//   }
//   fireEvent(){
//       this.childEvent.emit('Hey Phuc');
//   }
//   getUser(){
//       return "Hello " + this.name;
//   }
// }
