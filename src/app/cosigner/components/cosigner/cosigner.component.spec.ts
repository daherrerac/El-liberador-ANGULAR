import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosignerComponent } from './cosigner.component';

describe('CosignerComponent', () => {
  let component: CosignerComponent;
  let fixture: ComponentFixture<CosignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
