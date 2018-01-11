import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { DragScrollModule } from '../../node_modules/ngx-drag-scroll';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FaceComponent } from './face/face.component';
import { TitleComponent } from './title/title.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TilesComponent } from './tiles/tiles.component';
import { TileComponent } from './tile/tile.component';
import { FooterComponent } from './footer/footer.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';


const appRoutes: Routes = [
  { path: '1', component: PageOneComponent },
  { path: '2', component: PageTwoComponent },
  { path: '3', component: PageThreeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    NavComponent,
    FaceComponent,
    TitleComponent,
    MainContentComponent,
    FooterComponent,
    TileComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
