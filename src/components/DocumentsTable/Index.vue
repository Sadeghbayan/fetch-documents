<template>
  <section class="documents">
    <Table
      :data="documents"
      :currentPage="pagaintion.currentPage"
      :itemsPerPage="pagaintion.itemsPerPage"
      @name-clicked="sortByName"
      @date-clicked="sortByDate"
    />
    <!-- these are extras -->
    <!-- @name-clicked="sortByName" -->
    <!-- @date-clicked="sortByDate" -->
    <!-- :handlePagination="handlePagination" for paginatioan -->
    <!-- commnet -->
    <Paginations
      :currentPage="pagaintion.currentPage"
      :totalOfPages="documents.length"
      :handlePagination="handlePagination"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store/store";
import Table from "./Table.vue";
import Paginations from "./Pagination.vue";

export default defineComponent({
  name: "Documents",
  props: {
    documents: {
      // better to read from global types
      type: Array,
      required: true,
    },
  },
  components: {
    Table,
    Paginations,
  },

  async setup() {
    const store = useStore();
    const { getters } = store;
    const pagaintion = getters.pagination();
    return {
      store,
      pagaintion,
    };
  },
});
</script>

<style lang="scss">
.documents {
  background: $gray;
  padding: $page-space-15;
  border-radius: $border-radius-default;
  box-shadow: $default-boxshadow;
  margin-left: $page-space-20;
  width: 80%;
  @include mq(md) {
    width: auto;
    flex: 1;
  }
}
</style>
