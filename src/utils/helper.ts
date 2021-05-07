import { Ref } from "vue";

export const validFileFormats = ["pdf", "docx"];
export const checkDocumentsByFormats = (
  docs: IDocuments[] | undefined
): IDocuments[] | undefined => {
  const pattern = /\.pdf$|\.docx$/;
  const { documents } = docs as any;
  const filteredDocs = documents.filter((item: { name: string }) =>
    pattern.test(item.name)
  );
  return filteredDocs;
};

export const sortByDate = (type: string, data: IDocs[]): IDocs[] => {
  if (type === "asc") {
    data &&
      data.sort(
        (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
      );
  } else {
    data &&
      data.sort(
        (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
      );
  }
  return data;
};

export const sortByName = (type: string, data: IDocs[]): IDocs[] => {
  if (type === "asc") {
    data && data.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    data && data.sort((a, b) => b.name.localeCompare(a.name));
  }
  return data;
};

export const compareDates = (
  dateFrom: Ref<string>,
  dateTo: Ref<string>
): boolean => {
  const from = dateFrom.value;
  const to = dateTo.value;
  return new Date(from).getTime() > new Date(to).getTime();
};

export const filterByDate = (
  data: IDocs[],
  fromDate: Date,
  endDate: Date
): IDocs[] => {
  const filteredData = data.filter((a) => {
    const date = new Date(a.date).getTime();
    return (
      date >= new Date(fromDate).getTime() &&
      date <= new Date(endDate).getTime()
    );
  });
  return filteredData;
};
