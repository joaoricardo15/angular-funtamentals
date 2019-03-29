import { Component, Input } from '@angular/core'

@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <ng-content select="[well-header]"></ng-content>
      <ng-content select="[well-body]" *ngIf="visible"></ng-content>  
    </div>
  `
})
export class CollapsibleComponent {
  visible: boolean = true

  toggleContent() {
    this.visible = !this.visible
  }
}