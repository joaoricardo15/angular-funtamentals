import { Directive, Input, OnInit, Inject, ElementRef } from '@angular/core'
import { JQ_TOKEN } from './jquery.service'

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  @Input('modal-trigger') modalId: string

  private elementRef: HTMLElement

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.elementRef = ref.nativeElement
  }

  ngOnInit() {
    this.elementRef.addEventListener('click', eventObject => {
      this.$(`#${this.modalId}`).modal({})
    })
  }
}