import {Component, OnInit} from '@angular/core';
import {Programme} from '../../models/programme';
import {ProgrammeService} from '../../services/programme.service';

@Component({
    selector: 'app-programmes',
    templateUrl: './programmes.component.html',
    styleUrls: ['./programmes.component.scss'],
})
export class ProgrammesComponent implements OnInit {
    programmes: Programme[] = [];
    blankProgramme: Programme = {
        name: '',
        genre: '',
        rating: 0,
        comments: ''
    };
    display = 'grid';

    constructor(private programmeService: ProgrammeService) {
    }

    ngOnInit() {
        this.getProgrammes();
    }

    getProgrammes(): void {
        this.programmeService.getAll().subscribe(programmes => this.programmes = programmes);
    }

    changeDisplay(mode: string): void {
        this.display = mode;
    }
}
