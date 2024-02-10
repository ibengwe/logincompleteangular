import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionformComponent } from './sectionform.component';

describe('SectionformComponent', () => {
  let component: SectionformComponent;
  let fixture: ComponentFixture<SectionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
