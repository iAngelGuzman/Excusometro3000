import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss'],
  standalone: false,
})
export class RouletteComponent {
  @Input() isSpinning = false;
  @Output() spinComplete = new EventEmitter<void>();

  rotationAngle = 0;
  isCelebrating = false;

  constructor() { }

  spin() {
    if (this.isSpinning) return;
    
    this.isSpinning = true;
    this.isCelebrating = false;
    
    // Calcula un ángulo de giro aleatorio: 
    // Entre 5 y 10 vueltas completas (1800 - 3600 grados) + un ángulo aleatorio.
    const extraSpins = Math.floor(Math.random() * 6) + 5; 
    const randomAngle = Math.floor(Math.random() * 360);
    this.rotationAngle += (extraSpins * 360) + randomAngle;
    
    // La animación dura 3 segundos
    setTimeout(() => {
      this.isSpinning = false;
      this.isCelebrating = true;
      
      // Remove celebration class after animation completes
      setTimeout(() => this.isCelebrating = false, 500);
      
      this.spinComplete.emit();
    }, 3000);
  }
}
