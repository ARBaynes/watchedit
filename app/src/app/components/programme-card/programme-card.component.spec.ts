import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeCardComponent } from './programme-card.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MovieArtService} from '../../services/movie-art.service';

describe('ProgrammeCardComponent', () => {
  let component: ProgrammeCardComponent;
  let fixture: ComponentFixture<ProgrammeCardComponent>;
  let mockMovieArtService: any;

  beforeEach(async(() => {
    mockMovieArtService = jasmine.createSpyObj(['getArt']);
    mockMovieArtService.getArt.and.returnValue({ name: 'Test show' });

    TestBed.configureTestingModule({
      declarations: [ ProgrammeCardComponent ],
      imports: [HttpClientTestingModule],
      providers: [{ provide: MovieArtService, useValue: mockMovieArtService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
