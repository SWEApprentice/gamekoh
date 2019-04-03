import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesavePage } from './profilesave.page';

describe('ProfilesavePage', () => {
  let component: ProfilesavePage;
  let fixture: ComponentFixture<ProfilesavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
