import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticajaButtonComponent } from './multicaja-button.component';

describe('MulticajaButtonComponent', () => {
  let component: MulticajaButtonComponent;
  let fixture: ComponentFixture<MulticajaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticajaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticajaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
