import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNotebookDialogComponent } from './update-notebook-dialog.component';

describe('UpdateNotebookDialogComponent', () => {
  let component: UpdateNotebookDialogComponent;
  let fixture: ComponentFixture<UpdateNotebookDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNotebookDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNotebookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
