import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MelodyGroupComponent } from '../melody-group/melody-group.component';
import { MelodyGroup } from '../models/melody-group';
import { Melody } from '../models/melody';

@Component({
  selector: 'app-melody-group-list',
  standalone: true,
  imports: [MelodyGroupComponent, ],
  templateUrl: './melody-group-list.component.html',
  styleUrl: './melody-group-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class MelodyGroupListComponent implements AfterViewInit {

  @ViewChild('midiPlayer', { static: true }) midiPlayer: ElementRef;

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

  ngAfterViewInit() {
    this.midiPlayer.nativeElement.addVisualizer(document.getElementById('myVisualizer'));
  }
  
  meow() {
    this.midiPlayer.nativeElement.src = "/midi/Good Luck, Happy Trails I.mid";
    this.midiPlayer.nativeElement.onload = () => {
      this.midiPlayer.nativeElement.start();
    }
  }

}
