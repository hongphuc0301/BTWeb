import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HiComponent } from './component/hi/hi.component';
import { HiService } from './hi.service';
import { DetailhiComponent } from './component/detailhi/detailhi.component';
import { BaloComponent } from './component/balo/balo.component';
import { DetailBaloComponent } from './component/detail-balo/detail-balo.component';
import { CartComponent } from './component/cart/cart.component';
const appRoutes: Routes = [
    { path: 'balo', component: BaloComponent },
    { path: 'cart', component: CartComponent },
    { path: 'detail', component: DetailBaloComponent },
    { path: '', component: HiComponent },
  ];
@NgModule({
  declarations: [
    AppComponent,
    HiComponent,
    DetailhiComponent,
    BaloComponent,
    DetailBaloComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [HiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
