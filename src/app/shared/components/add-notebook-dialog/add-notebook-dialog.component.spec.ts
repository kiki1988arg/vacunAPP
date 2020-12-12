import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotebookDialogComponent } from './add-notebook-dialog.component';

describe('AddNotebookDialogComponent', () => {
  let component: AddNotebookDialogComponent;
  let fixture: ComponentFixture<AddNotebookDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNotebookDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotebookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
