export declare class Annuity {
   /**
   * @param principal The amount of your loan
   * @param interestRate The interest rate per period (usually per month)
   * @param installments The installments count (usually number of months)
   */
  constructor(principal: number, interestRate: number, installments: number);

   /**
   * Payment contains percentage and body parts. This method returns body part.
   * @param period From which period (usually month) you want to calculate
   * @returns Raw body of payment
   */
  _bodyInPayment(period: number): number;

   /**
   * Payment contains percentage and body parts. This method returns body part.
   * @param period From which period (usually month) you want to calculate
   * @returns Formatted body of payment
   */
  bodyInPayment(period: number): number;

   /**
   * Annuity factor needed for payment calculation
   * @returns Raw annuity factor
   */
  _factor(): number;

   /**
   * Annuity payment
   * @returns Raw annuity payment
   */
  _payment(): number;

   /**
   * Annuity payment
   * @returns Formatted annuity payment
   */
  payment(): number;

   /**
   * Total cost
   * @returns Raw total cost
   */
  _totalCost(): number;

   /**
   * Total cost
   * @returns Formatted total cost
   */
  totalCost(): number;


   /**
   * Overpayment
   * @returns Raw overpayment
   */
  _overpayment(): number;

   /**
   * Overpayment
   * @returns Formatted overpayment
   */
  overpayment(): number;


   /**
   * Payment contains percentage and body parts. This method returns percentage part.
   * @param period From which period (usually month) you want to calculate
   * @param balance From which balance you want to calculate. No required. Used in recursive method
   * @returns Raw percentage part
   */
  _percentageInPayment(period: number, balance?: number): number;

   /**
   * Payment contains percentage and body parts. This method returns percentage part.
   * @param period From which period (usually month) you want to calculate
   * @param balance From which balance you want to calculate. No required. Used in recursive method
   * @returns Formatted percentage part
   */
  percentageInPayment(period: number, balance?: number): number;
}

export declare class Linear {
   /**
   * @param principal The amount of your loan
   * @param interestRate The interest rate per period (usually per month)
   * @param installments The installments count (usually number of months)
   */
  constructor(principal: number, interstRate: number, installments: number);

   /**
   * Payment contains percentage and body parts. This method returns body part.
   * @returns Raw body of payment
   */
  _bodyInPayment(): number;

   /**
   * Payment contains percentage and body parts. This method returns body part.
   * @returns Formatted body of payment
   */
  bodyInPayment(): number;

   /**
   * Linear payment
   * @param period From which period (usually month) you want to calculate
   * @returns Raw linear payment
   */
  _payment(period: number): number;

   /**
   * Linear payment
   * @param period From which period (usually month) you want to calculate
   * @returns Formatted linear payment
   */
  payment(period: number): number;

   /**
   * Total cost
   * @returns Raw total cost
   */
  _totalCost(): number;

   /**
   * Total cost
   * @returns Formatted total cost
   */
  totalCost(): number;

   /**
   * Overpayment
   * @returns Raw overpayment
   */
  _overpayment(): number;

   /**
   * Overpayment
   * @returns Formatted overpayment
   */
  overpayment(): number;

   /**
   * Payment contains percentage and body parts. This method returns percentage part.
   * @param period From which period (usually month) you want to calculate
   * @returns Raw percentage part
   */
  _percentageInPayment(period: number): number;

   /**
   * Payment contains percentage and body parts. This method returns percentage part.
   * @param period From which period (usually month) you want to calculate
   * @returns Raw percentage part
   */
  percentageInPayment(period: number): number;
}
