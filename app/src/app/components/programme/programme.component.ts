import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Programme} from '../../models/programme';
import {ProgrammeService} from '../../services/programme.service';
import {MovieArtService} from '../../services/movie-art.service';

@Component({
    selector: 'app-programme',
    templateUrl: './programme.component.html',
    styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent implements OnInit {
    @Input() programme: Programme;
    @Output() programmeChanged = new EventEmitter<boolean>();

    constructor(
        private programmeService: ProgrammeService,
        private movieArtService: MovieArtService
    ) {
    }

    ngOnInit(): void {
        this.movieArtService.getArt(this.programme);
    }

    onSave(programme: Programme): void {
        this.programmeService.save(programme).subscribe(response => {
            this.programmeChanged.emit();
        });
    }

    onUpdate(programme: Programme): void {
        this.programmeService.update(programme).subscribe(response => {
            this.programmeChanged.emit();
        });
    }

    onDelete(id: number): void {
        if (confirm('Are you sure you want to delete this programme?')) {
            this.programmeService.delete(id).subscribe(response => {
                this.programmeChanged.emit();
            });
        }
    }
}
