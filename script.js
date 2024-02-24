// Seleciona o elemento que contém o nome do alimento
const nomeElement = document.querySelector('h2[property="food:name"]');

// Seleciona o elemento que contém a qualidade nutricional
const qualidadeNutricionalElement = document.querySelector('h4.grade_e_title');

// Seleciona o elemento que contém o número de ingredientes
const numIngredientesElement = document.querySelector('h4.evaluation_unknown_title');

// Seleciona o elemento que contém o Eco-Score
const ecoScoreElement = document.querySelector('h4.grade_unknown_title');

// Extrai o nome do alimento, tratando para quando a informação não está disponível
const nomeAlimento = nomeElement ? nomeElement.innerText.trim() : "N/A";

// Extrai a qualidade nutricional, tratando para quando a informação não está disponível
const qualidadeNutricional = qualidadeNutricionalElement ? qualidadeNutricionalElement.innerText.trim() : "N/A";

// Extrai o número de ingredientes, tratando para quando a informação não está disponível
const numIngredientes = numIngredientesElement ? numIngredientesElement.innerText.trim() : "N/A";

// Extrai o Eco-Score, tratando para quando a informação não está disponível
const ecoScore = ecoScoreElement ? ecoScoreElement.innerText.trim() : "N/A";

// Cria um objeto com as informações extraídas
const extractedData = {
  Nome: nomeAlimento,
  QualidadeNutricional: qualidadeNutricional,
  NumIngredientes: numIngredientes,
  EcoScore: ecoScore,
};

// Exibe o objeto no console
console.log(extractedData);
