import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from '../shared/event.model';

@Component({
  templateUrl: 'event-details.component.html',
  styles: [`
    .container { paddinf-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
    a { cursor: pointer; }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent
  addMode: boolean
  filterBy: string = 'all'
  sortBy: string = 'votes'

  constructor(private eventsService: EventService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventsService.getEvent(+params['id']);
      this.addMode = false;
      this.filterBy = 'all'
      this.sortBy = 'votes'
    })
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(session => session.id))
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventsService.updateEvent(this.event)
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }
}