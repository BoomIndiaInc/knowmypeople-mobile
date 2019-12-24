export class VoterSearchCriteria {
    constructor(
        public boothId: string = null,
        public electionId: string = null,
        public wardNbr: string = null
      ) {}
}

export class VoterElection {
    constructor(
        public electionType: string = null,
        public voted: boolean = false,
        public votedDateTime: string = null,
        public voterElectionPk: number = 0,
        public votingChance: string = null,
        public electionId: string = null,
        public boothId: string = null,
        public wardNumber: string = null,
        public memberOfParty: string = null,
        public slipDistributedDateTime: string = null,
        public slipValue: string = null,
        public needsTransportForVote: string = null
      ) {}
}

export class Voter {
    constructor(
        public voterPk: number = 0,
        public voterDetailPk: number = 0,
        public voterId: string = null,
        public voterName: string = null,
        public wardNumber: string = null,
        public serialNumber: string = null,
        public husbandOrFatherName: string = null,
        public gender: string = null,
        public age: number = null,
        public doorNumber: string = null,
        public address: string = null,
        public religion: string = null,
        public boothId: string = null,
        public imageUrl: string = null,
        public caste: string = null,
        public community: string = null,
        public occupation: string = null,
        public maritalStatus: string = null,
        public speciallyAbled: string = null,
        public village: string = null,
        public district: string = null,
        public mlaConstituency: string = null,
        public mpConstituency: string = null,
        public locationCoordinates: string = null,
        public voterElectionDTOList: VoterElection[] = []
      ) {}
}
