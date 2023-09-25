function isMagicSquare(matrix) {
    const n = matrix.length;
    
    // Calcula a soma da primeira linha para ser usada como referência
    let sumReference = 0;
    for (let i = 0; i < n; i++) {
      sumReference += matrix[
      sumReference += matrix][i];
    }
    
    // Verifica se a soma das linhas, colunas e diagonais é igual à soma de referência
    for (let i = 0; i < n; i++) {
      let rowSum = 0;
      let colSum = 0;
      for (let j = 0; j < n; j++) {
        rowSum += matrix[i][j];
        colSum += matrix[j][i];
      }
      
        rowSum += matrix[i][j];
        col
  if (rowSum !== sumReference || colSum !== sumReference) {
        return false;
      }
    }
    
    // Verifica a soma da diagonal principal
    let diagSum = 0;
    for (let i = 0; i < n; i++) {
      diagSum += matrix[i][i];
    }
    
      diag
  if (diagSum !== sumReference) {
      return false;
    }
    
    
    }
    

    
  // Verifica a soma da diagonal secundária
    let secDiagSum = 0;
    for (let i = 0; i < n; i++) {
      secDiagSum += matrix[i][n - 1 - i];
    }
    if (secDiagSum !== sumReference) {
      return false;
    }
    
    
   
  // Se todas as verificações passaram, é um quadrado mágico
    return true;
  
  // Exemplo de uso:
  const matriz =
    [
    [
  2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
  ];
  
  console.log(isMagicSquare(matriz)); // Deve retornar true