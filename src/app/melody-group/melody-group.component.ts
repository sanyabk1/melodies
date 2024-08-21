import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MelodyGroup } from '../models/melody-group';

@Component({
  selector: 'app-melody-group',
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatChipsModule],
  templateUrl: './melody-group.component.html',
  styleUrl: './melody-group.component.css'
})
export class MelodyGroupComponent {
  @Input() group : MelodyGroup;
}
