import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MelodyGroup } from './models/melody-group';
import { Melody } from './models/melody';
import { MelodyGroupComponent } from './melody-group/melody-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MelodyGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  group = <MelodyGroup> {
    title: 'Good Luck, Happy Trails',
    melodies: [
      <Melody> { title: 'Good Luck, Happy Trails I', chords:'C-G-Am-F ) C-G-F-G-C' },
      <Melody> { title: 'Good Luck, Happy Trails II', chords:'F-G-C ) F-G-Am' },
    ],
    notes: 'Notes',
    originalKey: 'C#',
    originalTempo: '108'
  }
}