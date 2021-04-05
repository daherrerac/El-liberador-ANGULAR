import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPaymentsComponent } from './section-payments.component';

describe('SectionPaymentsComponent', () => {
  let component: SectionPaymentsComponent;
  let fixture: ComponentFixture<SectionPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
