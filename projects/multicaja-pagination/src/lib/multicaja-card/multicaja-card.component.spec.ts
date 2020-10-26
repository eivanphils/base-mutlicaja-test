import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticajaCardComponent } from './multicaja-card.component';

describe('MulticajaCardComponent', () => {
  let component: MulticajaCardComponent;
  let fixture: ComponentFixture<MulticajaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticajaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticajaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
