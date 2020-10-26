import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticajaPaginationComponent } from './multicaja-pagination.component';

describe('MulticajaPaginationComponent', () => {
  let component: MulticajaPaginationComponent;
  let fixture: ComponentFixture<MulticajaPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticajaPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticajaPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
