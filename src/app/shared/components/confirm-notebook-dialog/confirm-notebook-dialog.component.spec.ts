import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmNotebookDialogComponent } from './confirm-notebook-dialog.component';

describe('ConfirmNotebookDialogComponent', () => {
  let component: ConfirmNotebookDialogComponent;
  let fixture: ComponentFixture<ConfirmNotebookDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmNotebookDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmNotebookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
