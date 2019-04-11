import { Component, OnInit } from '@angular/core';
import { ISession, IEvent } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 10px; }
    @media (max-width: 1200px) { #searchForm { display: none; } }
    li > a.active { color: #f97924; }
  `]
})
export class NavbarComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[];
  events: IEvent[];

  constructor(public authService: AuthService, private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe((events: IEvent[]) => {
        this.events = events;
      });
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
