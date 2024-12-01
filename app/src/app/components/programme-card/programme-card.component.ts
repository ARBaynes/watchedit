import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Programme} from '../../models/programme';
import * as movieArt from 'movie-art';

@Component({
  selector: 'app-programme-card',
  templateUrl: './programme-card.component.html',
  styleUrls: ['./programme-card.component.scss']
})
export class ProgrammeCardComponent implements OnInit {
  @Input() programme: Programme;
  @Output() onProgrammeChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    movieArt(this.programme.name).then((response: any): void => {
      if (typeof response === 'string') {
        this.programme.art = response;
      } else {
        this.programme.art = 'https://placehold.co/400x600.png?text=No+Artwork+Available';
      }
    }).error((): void => {
      console.log('Error fetching movie art');
    });
  }

}
