import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalSearchComponent } from './profesional-search.component';

describe('ProfesionalSearchComponent', () => {
  let component: ProfesionalSearchComponent;
  let fixture: ComponentFixture<ProfesionalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
