import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitCard } from './toolkit-card';

describe('ToolkitCard', () => {
  let component: ToolkitCard;
  let fixture: ComponentFixture<ToolkitCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolkitCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolkitCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
