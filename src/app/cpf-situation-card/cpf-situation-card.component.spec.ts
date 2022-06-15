import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfSituationCardComponent } from './cpf-situation-card.component';

describe('CpfSituationCardComponent', () => {
  let component: CpfSituationCardComponent;
  let fixture: ComponentFixture<CpfSituationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpfSituationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfSituationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
