import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgpressBarComponent } from './progpress-bar.component';

describe('ProgpressBarComponent', () => {
  let component: ProgpressBarComponent;
  let fixture: ComponentFixture<ProgpressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgpressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgpressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
