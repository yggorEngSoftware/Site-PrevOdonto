import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAtendimentoComponent } from './listagem-atendimento.component';

describe('ListagemAtendimentoComponent', () => {
  let component: ListagemAtendimentoComponent;
  let fixture: ComponentFixture<ListagemAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
