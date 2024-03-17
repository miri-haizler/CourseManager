import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOfCoursesComponent } from './all-of-courses.component';

describe('AllOfCoursesComponent', () => {
  let component: AllOfCoursesComponent;
  let fixture: ComponentFixture<AllOfCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllOfCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllOfCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
