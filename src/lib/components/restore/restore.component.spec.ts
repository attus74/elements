import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttusElementsRestoreComponent } from './restore.component';

describe('AttusElementsRestoreComponent', () => {
  let component: AttusElementsRestoreComponent;
  let fixture: ComponentFixture<AttusElementsRestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttusElementsRestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttusElementsRestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
