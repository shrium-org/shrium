import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meaning } from './meaning';

describe('Meaning', () => {
  let component: Meaning;
  let fixture: ComponentFixture<Meaning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Meaning],
    }).compileComponents();

    fixture = TestBed.createComponent(Meaning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
