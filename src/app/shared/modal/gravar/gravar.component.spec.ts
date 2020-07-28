import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravarComponent } from './gravar.component';

describe('GravarComponent', () => {
  let component: GravarComponent;
  let fixture: ComponentFixture<GravarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
