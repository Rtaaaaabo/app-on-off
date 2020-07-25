import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  kindCongestion = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
  ];

  restaurantForm = new FormGroup({
    isOpen: new FormControl(false),
    comment: new FormControl(''),
    congestion: new FormControl('1'),
  });

  constructor(
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }

  SendStatus() {
    console.log(this.restaurantForm.value);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: '更新しました！ありがとうございます！',
      duration: 3000
    });
    toast.present();
  }

}
