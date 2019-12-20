export class User {
    constructor(
        public activeUser: boolean,
        public agentId: number,
        public userType: string,
        public authorities: string[],
        public boothId: string,
        public electionType: string,
        public wardId: string,
        public emailId: string,
        public mobileNumber: string,
        public partyMemberId: string,
        public partyName: string,
        public rating: number,
        public referencedBy: string,
        public userId: string,
        public firstName: string,
        public lastName: string,
        public imageUrl: string,
        public autoSync: boolean,
        public autoSyncDuration: number,
        public userDetailId: string,
        public login: string,
        public electionId: string,
        public language: string,
      ) {}
}

export enum UserType {
  ADMIN  = 'ROLE_ADMIN',
  USER   = 'ROLE_USER',
  AGENT  = 'ROLE_AGENT',
  DISTRIBUTOR  = 'ROLE_DIST',
  ANONYMOUS  = 'ROLE_ANONYMOUS'
}
