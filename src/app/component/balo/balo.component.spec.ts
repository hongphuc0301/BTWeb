import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaloComponent } from './balo.component';

describe('BaloComponent', () => {
  let component: BaloComponent;
  let fixture: ComponentFixture<BaloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
