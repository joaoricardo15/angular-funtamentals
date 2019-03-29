import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  EventRouteActivator,
  EventsListComponent,
  EventsListResolver,
  EventService,
  EventThumbnailComponent,
  NavbarComponent,
  JQ_TOKEN,
  TOASTR_TOKEN, 
  Toastr,
  SimpleModal,
  DurationPipe,
  ModalTriggerDirective
} from './index'

let toastr: Toastr = window['toastr']
let jQuery = window['$']

@NgModule({ 
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
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
    ModalTriggerDirective
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventsListResolver,
    AuthService
  ],
  bootstrap: [
    EventsAppComponent
  ]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
