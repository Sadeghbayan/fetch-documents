interface IDocs {
  date: string;
  name: string;
}

interface IUser {
  body: {
    User: {
      profile: {
        firstName: string;
        lastName: string;
      };
    };
  };
}

interface IPagination {
  currentPage: number;
  total: number;
  itemsPerPage: number;
}

interface IDocuments {
  date: string | number | Date;
  documents: IDocs[];
}

interface State {
  pagination: IPagination;
  sortNameType: string | null;
  sortDateType: string | null;
  documents: IDocs[];
  filteredDocuments: IDocs[];
}

interface Store {
  state: State;
  methods?: any;
  getters?: any;
}
