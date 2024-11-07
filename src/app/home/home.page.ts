import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  reloadCount: number = 0;

  constructor() {}

  ngOnInit(): void {
    const savedReloadCount = localStorage.getItem('reloadCount');
    if (savedReloadCount) {
      this.reloadCount = parseInt(savedReloadCount);
    }
    this.reloadCount++;
    localStorage.setItem('reloadCount', this.reloadCount.toString());
  }

  reset() {
    this.reloadCount = 0;
    localStorage.setItem('reloadCount', this.reloadCount.toString());
  }
}
