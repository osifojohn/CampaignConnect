import financialData from '../data/financialData.json';
import { FinancialOverViewData } from '../types';

class FinancialRepository {
  private data: FinancialOverViewData | null = null;

  constructor() {
    this.data = financialData as FinancialOverViewData;
  }

  getFinancialData() {
    return this.data;
  }
}

export default new FinancialRepository();
