import useApi from "./useApi";
import { documentsUrl } from "../utils/config";
import { checkDocumentsByFormats } from "../utils/helper";
import { Ref, ref } from "vue";
export type UsableDocuments = Promise<{
  documents: Ref<IDocuments[] | undefined>;
  error: Ref<any>;
}>;

export default async function useDocuments(): UsableDocuments {
  const documents: Ref<IDocuments[] | undefined> = ref();
  const { response, request, error } = useApi<IDocuments[]>(documentsUrl);
  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    documents.value = checkDocumentsByFormats(response.value);
    loaded.value = true;
  }

  return { documents, error };
}
