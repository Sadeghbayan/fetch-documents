<template>
  <div class="page">
    <h1 class="title">Documents</h1>
    <section class="documents_wrapper">
      <DocumentsFilter />
      <DocumentsTable :documents="getDcouments" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store/store";
import DocumentsFilter from "@/components/DocumentsFilter.vue";
import DocumentsTable from "@/components/DocumentsTable/Index.vue";
import useDocuments from "@/hooks/useDocuments";
export default defineComponent({
  name: "Documents",
  components: {
    DocumentsFilter,
    DocumentsTable,
  },
  async setup() {
    const store = useStore();
    const { getters, methods } = store;
    const { documents, error } = await useDocuments();
    methods.saveDocuments(documents);
    methods.sortByDate("asc");
    const getDcouments = computed(() => {
      return getters.data();
    });

    return {
      getDcouments,
      error,
    };
  },
});
</script>

<style lang="scss">
.documents_wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
}
</style>
