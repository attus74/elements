/**
 * @file Floating Action Button
 * 
 * @author Attila Németh
 * @date 04.01.2021 
 */
 
import {Component, Input, HostBinding} from '@angular/core';

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: '[attus-fab-button]',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class AttusElementsFabComponent {
  
  @HostBinding('class') elementClass: string = 'mat-raised-button';
  isMobile: boolean = true
  @Input() set color(color: string) {
    this.colorString = color;
    this.updateElementClass();
  }
  colorString: string = null
  
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe(status => {
      if (status.matches) {
        this.isMobile = true;
      }
      else {
        this.isMobile = false;
      }
      this.updateElementClass();
    });
  }
  
  private updateElementClass(): void {
    let classes: Array<string> = [
      'attus-fab-button',
      'mat-raised-button',
      'mat-focus-indicator',
      'mat-button-base',
      'mat-' + this.colorString,
    ];
    if (this.isMobile) {
      classes.push('attus-fab-mobile');
    }
    this.elementClass = classes.join(' ');
  }
  
}