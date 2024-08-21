import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MelodyGroupListComponent } from './melody-group-list/melody-group-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MelodyGroupListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}