import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, IonicModule,
  ],
  providers: [StatusBar, SplashScreen],

  exports: [HeaderComponent]
})
export class SharedModule { }
