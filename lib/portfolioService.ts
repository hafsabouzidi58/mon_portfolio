import { portfolioData } from './data';

export async function getPortfolioData() {
  // Retourne directement les données statiques sans passer par la base de données
  return portfolioData;
}