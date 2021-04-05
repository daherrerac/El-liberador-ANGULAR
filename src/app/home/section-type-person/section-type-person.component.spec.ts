import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTypePersonComponent } from './section-type-person.component';

describe('SectionTypePersonComponent', () => {
  let component: SectionTypePersonComponent;
  let fixture: ComponentFixture<SectionTypePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTypePersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTypePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
