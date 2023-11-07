import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaPaisaComponent } from './bandeja-paisa.component';

describe('BandejaPaisaComponent', () => {
  let component: BandejaPaisaComponent;
  let fixture: ComponentFixture<BandejaPaisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandejaPaisaComponent]
    });
    fixture = TestBed.createComponent(BandejaPaisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
