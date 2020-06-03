import { TestBed } from '@angular/core/testing';

import { GerenciadorService } from './gerenciador.service';

describe('GerenciadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GerenciadorService = TestBed.get(GerenciadorService);
    expect(service).toBeTruthy();
  });
});
