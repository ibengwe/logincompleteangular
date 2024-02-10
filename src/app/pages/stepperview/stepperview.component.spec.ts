import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperviewComponent } from './stepperview.component';

describe('StepperviewComponent', () => {
  let component: StepperviewComponent;
  let fixture: ComponentFixture<StepperviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepperviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
