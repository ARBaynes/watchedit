import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// API simulation
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammesComponent } from './components/programmes/programmes.component';
import { ProgrammeComponent } from './components/programme/programme.component';
import { ProgrammeService } from './services/programme.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ProgrammeCardComponent } from './components/programme-card/programme-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammesComponent,
    ProgrammeComponent,
    ProgrammeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
  ],
  providers: [
    ProgrammeService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
