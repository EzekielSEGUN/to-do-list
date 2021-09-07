import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatCardModule} from '@angular/material/card';
import { SideNavComponent } from './side-nav.component'; 

const materialcomponent = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatBadgeModule,
  MatGridListModule,
  MatCardModule
]


@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    materialcomponent
  ],

  exports:[
    materialcomponent
  ]
})
export class SideNavModule { }