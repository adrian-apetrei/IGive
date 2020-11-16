export class UserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly email: string;
}

// tslint:disable-next-line: max-classes-per-file
export class UserPreferencesDto {
  readonly selectedTopics: [];
  readonly optimizeDonations: boolean;
  readonly goLocal: boolean;
  readonly taxReturns: boolean;
}
