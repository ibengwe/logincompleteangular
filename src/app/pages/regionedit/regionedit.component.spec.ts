import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegioneditComponent } from './regionedit.component';

describe('RegioneditComponent', () => {
  let component: RegioneditComponent;
  let fixture: ComponentFixture<RegioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegioneditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
