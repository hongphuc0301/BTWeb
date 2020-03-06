import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBaloComponent } from './detail-balo.component';

describe('DetailBaloComponent', () => {
  let component: DetailBaloComponent;
  let fixture: ComponentFixture<DetailBaloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBaloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
