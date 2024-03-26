export function getPaginationParams(query: any): [page: number, perPage: number] {
    const { page, perPage } = query
  
    const perPageNumber = typeof perPage === 'string' && parseInt(perPage, 10) > 0
      ? parseInt(perPage, 10)
      : 10
    /*verifica se perPage é uma String e se pode ser convertida em um num positivo. Se sim
    converte a string para numero. Se não, definimos o 'perPageNumber' como 10
  */
    const pageNumber = typeof page === 'string' && parseInt(page, 10) > 0
      ? parseInt(page, 10)
      : 1
       //se a página não for fornecida então será a primeira página
  
    return [pageNumber, perPageNumber]
  }