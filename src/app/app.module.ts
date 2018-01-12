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


const appRoutes: Routes = [
  { path: 'content/:page', component: MainContentComponent  },
  { path: '', redirectTo: 'content/home', pathMatch: 'full' }
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
