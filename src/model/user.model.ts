export class User {
    constructor(
        public activeUser: boolean,
        public agentId: number,
        public agentType: string,
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
        public language: string, // need to be added in backend
      ) {}
}
