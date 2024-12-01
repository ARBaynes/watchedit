import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Programme} from '../../models/programme';
import {ProgrammeService} from '../../services/programme.service';
import * as movieArt from 'movie-art';

@Component({
    selector: 'app-programme',
    templateUrl: './programme.component.html',
    styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent implements OnInit {
    @Input() programme: Programme;
    @Output() onProgrammeChanged = new EventEmitter<boolean>();

    constructor(private programmeService: ProgrammeService) {
    }

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

    onSave(programme: Programme): void {
        this.programmeService.save(programme).subscribe(response => {
            this.onProgrammeChanged.emit();
        });
    }

    onUpdate(programme: Programme): void {
        this.programmeService.update(programme).subscribe(response => {
            this.onProgrammeChanged.emit();
        });
    }

    onDelete(id: number): void {
        if (confirm('Are you sure you want to delete this programme?')) {
            this.programmeService.delete(id).subscribe(response => {
                this.onProgrammeChanged.emit();
            });
        }
    }
}
