interface IAnnuity {
  new(principal: number, interstRate: number, instalments: number): IAnnuity;

  _bodyInPayment(period: number): number;
  bodyInPayment(period: number): number;

  _factor(): number;
  _payment(): number;
  payment(): number;

  _totalCost(): number;
  totalCost(): number;

  _overpayment(): number;
  overpayment(): number;

  _percentageInPayment(period: number, balance?: number): number;
  percentageInPayment(period: number, balance?: number): number;
}

export const Annuity : IAnnuity;
