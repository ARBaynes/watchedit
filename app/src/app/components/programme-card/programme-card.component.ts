import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Programme} from '../../models/programme';
import {RatingEmojis} from '../../enums/rating-emojis';
import {MovieArtService} from '../../services/movie-art.service';

@Component({
  selector: 'app-programme-card',
  templateUrl: './programme-card.component.html',
  styleUrls: ['./programme-card.component.scss']
})
export class ProgrammeCardComponent implements OnInit {
  @Input() programme: Programme;
  @Output() programmeChanged = new EventEmitter<boolean>();

  constructor(private movieArtService: MovieArtService) { }

  ngOnInit(): void {
    this.movieArtService.getArt(this.programme);
  }

  getEmoji(): string {
    // A small fun addition for a personal touch :)
    return RatingEmojis[this.programme.rating - 1];
  }
}
