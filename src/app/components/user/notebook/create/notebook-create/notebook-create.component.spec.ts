import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookCreateComponent } from './notebook-create.component';

describe('NotebookCreateComponent', () => {
  let component: NotebookCreateComponent;
  let fixture: ComponentFixture<NotebookCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
