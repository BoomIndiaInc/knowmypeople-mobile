import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterDetailPage } from './voter-detail.page';

describe('VoterDetailPage', () => {
  let component: VoterDetailPage;
  let fixture: ComponentFixture<VoterDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
