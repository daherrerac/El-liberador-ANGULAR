import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerArrendatarioComponent } from './banner-arrendatario.component';

describe('BannerArrendatarioComponent', () => {
  let component: BannerArrendatarioComponent;
  let fixture: ComponentFixture<BannerArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerArrendatarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
