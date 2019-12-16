export class User {
    constructor(
        public activeUser: boolean,
        public agentId: number,
        public agentType: string,
        public authorities: string[],
        public boothId: string,
        public electionType: string,
        public emailId: string,
        public mobileNumber: string,
        public partyMemberId: string,
        public partyName: string,
        public rating: number,
        public referencedBy: string,
        public userId: string,
        public userName: string,
        public imageUrl: string // need to be added in backend
      ) {}
}
