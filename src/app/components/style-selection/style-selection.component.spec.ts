import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSelectionComponent } from './style-selection.component';

describe('StyleSelectionComponent', () => {
  let component: StyleSelectionComponent;
  let fixture: ComponentFixture<StyleSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyleSelectionComponent]
    });
    fixture = TestBed.createComponent(StyleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
