import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictformEditComponent } from './districtform-edit.component';

describe('DistrictformEditComponent', () => {
  let component: DistrictformEditComponent;
  let fixture: ComponentFixture<DistrictformEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistrictformEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistrictformEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
