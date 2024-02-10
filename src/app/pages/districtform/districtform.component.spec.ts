import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictformComponent } from './districtform.component';

describe('DistrictformComponent', () => {
  let component: DistrictformComponent;
  let fixture: ComponentFixture<DistrictformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistrictformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistrictformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
