import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviantArtComponent } from './deviant-art.component';

describe('DeviantArtComponent', () => {
  let component: DeviantArtComponent;
  let fixture: ComponentFixture<DeviantArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviantArtComponent]
    });
    fixture = TestBed.createComponent(DeviantArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
