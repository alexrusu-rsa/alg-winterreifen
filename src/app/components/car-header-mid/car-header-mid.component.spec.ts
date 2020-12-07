import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarHeaderMidComponent } from './car-header-mid.component';

describe('CarHeaderMidComponent', () => {
  let component: CarHeaderMidComponent;
  let fixture: ComponentFixture<CarHeaderMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarHeaderMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarHeaderMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
