export default function agruparAnuncios(anuncios = null, cidades = null) {
  const ctx = [];
  if (anuncios) {
    anuncios?.forEach((category) => {
      category.produto?.forEach((product) => {
        ctx.push({
          idCategoria: category.id,
          id: product.id,
          categoria: category.descricao,
          descricaoProduto: product.descricao,
          nome: product.nome,
          foto: category.imagem,
          fotosAnuncio: [],
          datasDisponiveisAnuncio: [],
          cidade: 'Cidade Teste',
        });
      });
    });
  }
  if (cidades) {
    cidades?.forEach((cidadesCtx) => {
      cidadesCtx.produto?.forEach((produto) => {
        ctx.forEach((item, i) => {
          if (item.id === produto.id) {
            ctx[i].cidade = cidadesCtx.nome;
          }
        });
      });
    });
  }
  return ctx;
}
