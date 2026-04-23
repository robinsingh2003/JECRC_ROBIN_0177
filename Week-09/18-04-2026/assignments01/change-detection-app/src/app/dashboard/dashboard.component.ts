import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from '../stats/stats.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  @Input() userStats: any;

  lastAction = 'None';

  updateLocally() {
    this.userStats.score = 100; // ❌ mutation
    this.lastAction = 'Mutated (No UI Update)';
  }

  fixUpdate() {
    this.userStats = {
      ...this.userStats,
      score: 200
    };
    this.lastAction = 'Reference Changed (UI Updated)';
  }
}