import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttusElementsFabComponent } from './fab.component';

describe('AttusElementsFabComponent', () => {
  let component: AttusElementsFabComponent;
  let fixture: ComponentFixture<AttusElementsFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttusElementsFabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttusElementsFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
