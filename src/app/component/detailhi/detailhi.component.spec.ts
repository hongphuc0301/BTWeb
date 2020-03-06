import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhiComponent } from './detailhi.component';

describe('DetailhiComponent', () => {
  let component: DetailhiComponent;
  let fixture: ComponentFixture<DetailhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
