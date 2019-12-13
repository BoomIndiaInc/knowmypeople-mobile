import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersPage } from './voters.page';

describe('VotersPage', () => {
  let component: VotersPage;
  let fixture: ComponentFixture<VotersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
