import { Component, Input } from '@angular/core';
import { MelodyGroup } from '../models/melody-group';

@Component({
  selector: 'app-melody-group',
  standalone: true,
  imports: [],
  templateUrl: './melody-group.component.html',
  styleUrl: './melody-group.component.css'
})
export class MelodyGroupComponent {
  @Input() group : MelodyGroup;
}
