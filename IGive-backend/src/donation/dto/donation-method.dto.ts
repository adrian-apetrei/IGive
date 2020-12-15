class RoundUpMethod {
  readonly donateUntilGoal: boolean;
  readonly donateUntilDate: boolean;
  readonly donationDate: string;
  readonly donateUntilLimit: boolean;
  readonly donationLimit: number;
}

// tslint:disable-next-line: max-classes-per-file
class IncognitoMethod {
  readonly donationAmount: number;
  readonly when: string;
  readonly donationLimit: number;
  readonly period: number;
}

// tslint:disable-next-line: max-classes-per-file
class DeterminedMethod {
  readonly donationAmount: number;
  readonly when: string;
}

// tslint:disable-next-line: max-classes-per-file
export class DonationMethodDto {
  readonly userId: string;
  readonly charityId: string;
  readonly donationMethod: string;
  readonly paymentMethod: RoundUpMethod | IncognitoMethod | DeterminedMethod;
}
