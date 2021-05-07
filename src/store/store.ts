// created a simple store without Vuex
import { reactive, readonly, inject, DeepReadonly, provide } from "vue";
import { sortByDate, sortByName, filterByDate } from "@/utils/helper";
//State
const state = reactive<State>({
  documents: [],
  filteredDocuments: [],
  pagination: {
    currentPage: 1,
    total: 0,
    itemsPerPage: 6,
  },
  sortNameType: "",
  sortDateType: "asc",
});

//Methods
const methods = {
  saveDocuments(data: IDocs[]) {
    state.documents = data;
    state.filteredDocuments = [...state.documents];
  },
  setTotalOfPages(dataSize: number) {
    const total: number = dataSize / state.pagination.itemsPerPage;
    if (dataSize % state.pagination.itemsPerPage === 0) {
      state.pagination.total = ~~total;
    } else {
      state.pagination.total = ~~total + 1;
    }
  },
  goToFirstPage() {
    state.pagination.currentPage = 1;
  },
  goToPreviousPage() {
    if (
      state.pagination.currentPage !== 1 &&
      state.pagination.currentPage >= 1
    ) {
      state.pagination.currentPage = state.pagination.currentPage - 1;
    }
  },
  goToNextPage() {
    if (state.pagination.currentPage < ~~state.pagination.total) {
      state.pagination.currentPage = state.pagination.currentPage + 1;
    }
  },
  goToLastPage() {
    state.pagination.currentPage = state.pagination.total as number;
  },
  setSortDateType(type: string) {
    state.sortDateType = type;
  },
  sortByDate(type: string) {
    if (type === "asc") {
      state.documents = sortByDate("asc", state.documents);
    } else {
      state.documents = sortByDate("desc", state.documents);
    }
  },
  setSortNameType(type: string) {
    state.sortNameType = type;
  },
  sortByName(type: string) {
    if (type === "asc") {
      state.documents = sortByName("asc", state.documents);
    } else {
      state.documents = sortByName("desc", state.documents);
    }
  },
  filterByDate(fromDate: Date, toDate: Date) {
    const documentsByRange: IDocs[] = filterByDate(
      state.filteredDocuments,
      fromDate,
      toDate
    );
    if (documentsByRange === undefined || documentsByRange.length == 0) {
      state.pagination.total = 0;
      state.pagination.currentPage = 0;
    } else {
      state.pagination.currentPage = 1;
    }

    state.documents = sortByDate("asc", documentsByRange);
  },
  resetFilter() {
    state.documents = [...state.filteredDocuments];
    this.sortByDate("asc");
    state.pagination.currentPage = 1;
  },
};

// Getters
const getters = {
  pagination(): IPagination {
    return state.pagination;
  },
  totalPagintion(): number | null {
    return state.pagination.total;
  },
  sortDateType() {
    return state.sortDateType;
  },
  sortNameType() {
    return state.sortNameType;
  },
  data() {
    return state.documents;
  },
};

export const StateSymbol = Symbol("Character Store");

// make it also available in router
export const store: DeepReadonly<Store> = readonly({
  state,
  methods,
  getters,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function provideStore() {
  provide(StateSymbol, store);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore() {
  const store = inject(StateSymbol);
  if (!store) {
    // throw error, no store provided
  }
  return store as Store;
}
