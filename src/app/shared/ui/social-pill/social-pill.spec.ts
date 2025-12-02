import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPill } from './social-pill';

describe('SocialPill', () => {
  let component: SocialPill;
  let fixture: ComponentFixture<SocialPill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialPill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialPill);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
