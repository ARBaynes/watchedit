import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeComponent } from './programme.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {MovieArtService} from '../../services/movie-art.service';

describe('ProgrammeComponent', () => {
  let component: ProgrammeComponent;
  let fixture: ComponentFixture<ProgrammeComponent>;
  let mockMovieArtService: any;

  beforeEach(async(() => {
    mockMovieArtService = jasmine.createSpyObj(MovieArtService, ['getArt']);
    mockMovieArtService.getArt.and.returnValue({ name: 'Test show' });

    TestBed.configureTestingModule({
      declarations: [ ProgrammeComponent ],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [{ provide: MovieArtService, useValue: mockMovieArtService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
