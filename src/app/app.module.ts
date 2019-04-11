import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  appRoutes,
  AuthService,
  CreateEventComponent,
  Error404Component,
  EventsAppComponent,
  EventDetailsComponent,
  CreateSessionComponent,
  CollapsibleComponent,
  SessionListComponent,
  EventsListComponent,
  EventsListResolver,
  EventResolver,
  EventService,
  EventThumbnailComponent,
  NavbarComponent,
  JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  SimpleModal,
  DurationPipe,
  ModalTriggerDirective,
  UpvoteComponent,
  VoterService,
  LocationValidator
} from './index';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),//, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    Error404Component,
    CollapsibleComponent,
    DurationPipe,
    SimpleModal,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  providers: [
    EventService,
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventResolver,
    EventsListResolver,
    AuthService,
    VoterService
  ],
  bootstrap: [
    EventsAppComponent
  ]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
