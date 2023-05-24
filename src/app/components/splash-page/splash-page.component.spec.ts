import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashPageComponent } from './splash-page.component';

describe('SplashPageComponent', () => {
  let component: SplashPageComponent;
  let fixture: ComponentFixture<SplashPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashPageComponent]
    });
    fixture = TestBed.createComponent(SplashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
