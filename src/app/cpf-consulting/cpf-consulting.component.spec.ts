import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfConsultingComponent } from './cpf-consulting.component';

describe('CpfConsultingComponent', () => {
  let component: CpfConsultingComponent;
  let fixture: ComponentFixture<CpfConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpfConsultingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
