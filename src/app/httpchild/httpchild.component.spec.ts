import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpchildComponent } from './httpchild.component';

describe('HttpchildComponent', () => {
  let component: HttpchildComponent;
  let fixture: ComponentFixture<HttpchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
