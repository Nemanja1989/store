import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersComponentComponent } from './buyers-component.component';

describe('BuyersComponentComponent', () => {
  let component: BuyersComponentComponent;
  let fixture: ComponentFixture<BuyersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
