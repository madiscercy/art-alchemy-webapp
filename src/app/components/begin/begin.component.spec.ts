import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginComponent } from './begin.component';

describe('BeginComponent', () => {
  let component: BeginComponent;
  let fixture: ComponentFixture<BeginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeginComponent]
    });
    fixture = TestBed.createComponent(BeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
