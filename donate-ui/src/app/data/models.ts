export class CharityOrganization {
    topic: string;
    regionFocus: string;
    country: string;
    name: string;
    websiteURL: string;
}

export interface Topic {
    id: string;
    name: string;
}

export interface Credentials {
    email: string;
    password: string;
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    bio: string;
    createdAt: string;
    id: string;
    firstLogin: boolean;
  }
