import { TarefaConcluidaDirective } from './tarefa-concluida.directive';
import { ElementRef } from '@angular/core';

describe('TarefaConcluidaDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('td')
    };
    const directive = new TarefaConcluidaDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
