import { PaginaNaoEncontradaModule } from './pagina-nao-encontrada.module';

describe('PaginaNaoEncontradaModule', () => {
  let paginaNaoEncontradaModule: PaginaNaoEncontradaModule;

  beforeEach(() => {
    paginaNaoEncontradaModule = new PaginaNaoEncontradaModule();
  });

  it('should create an instance', () => {
    expect(paginaNaoEncontradaModule).toBeTruthy();
  });
});
