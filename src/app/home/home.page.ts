import { Component } from '@angular/core';
import { ExcuseService } from '../services/excuse.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  targets: string[] = [];
  levels: string[] = [];
  
  selectedTarget: string = '';
  selectedLevel: string = '';
  
  isSpinning = false;

  constructor(
    private excuseService: ExcuseService,
    private alertController: AlertController
  ) {
    this.targets = this.excuseService.getTargets();
    this.levels = this.excuseService.getLevels();
    
    // Valores por defecto
    if (this.targets.length > 0) this.selectedTarget = this.targets[0];
    if (this.levels.length > 0) this.selectedLevel = this.levels[0];
  }

  onSpinComplete() {
    this.isSpinning = false;
    const excuse = this.excuseService.getRandomExcuse(this.selectedTarget, this.selectedLevel);
    this.showExcuseAlert(excuse);
  }

  async showExcuseAlert(excuse: string) {
    const alert = await this.alertController.create({
      header: '¡Tu Excusa!',
      subHeader: `Para: ${this.selectedTarget} (${this.selectedLevel})`,
      message: excuse,
      buttons: [
        {
          text: 'Copiar',
          handler: () => {
            navigator.clipboard.writeText(excuse);
          }
        },
        {
          text: 'Aceptar',
          role: 'cancel'
        }
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }
}
