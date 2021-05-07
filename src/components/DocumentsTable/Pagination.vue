<template>
  <div class="pagination">
    <button class="btn" :class="disableClass" @click="goToFirstPage">
      &lt;&lt;
    </button>
    <button class="btn" :class="disableClass" @click="goToPreviousPage">
      &lt;
    </button>
    <span class="counter">
      {{ parseInt(currentPage) }} of {{ handleTotalInPagination }}
    </span>
    <button class="btn" :class="disableClass" @click="goToNextPage">
      &gt;
    </button>
    <button class="btn" :class="disableClass" @click="goToLastPage">
      &gt;&gt;
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store/store";

export default defineComponent({
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      default: null,
    },
    totalOfPages: {
      type: Number,
      default: null,
    },
    handlePagination: {
      type: Object,
    },
  },
  async setup(props) {
    const store = useStore();
    const { getters, methods } = store;
    // handle the data for the table
    const handleTotalInPagination = computed(() => {
      const { totalOfPages } = props;
      methods.setTotalOfPages(totalOfPages);
      return parseInt(getters.totalPagintion());
    });

    const disableClass = computed(() => {
      return getters.totalPagintion() === 0 ? "disabled" : "";
    });

    const goToLastPage = () => {
      methods.goToLastPage();
    };

    const goToNextPage = () => {
      methods.goToNextPage();
    };

    const goToPreviousPage = () => {
      methods.goToPreviousPage();
    };

    const goToFirstPage = () => {
      methods.goToFirstPage();
    };
    return {
      handleTotalInPagination,
      goToLastPage,
      goToNextPage,
      goToPreviousPage,
      goToFirstPage,
      disableClass,
    };
  },
});
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: $page-space-20;
  @include mq(md) {
    justify-content: flex-end;
  }
  .btn {
    width: 22px;
    height: 22px;
    background: $white;
    border: 1px solid $dark-blue;
    padding: 0;
    margin: 0 9px 0 0;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &.disabled {
      pointer-events: none;
      background: $gray;
    }
  }
  .counter {
    font-size: $font-size-large;
    padding-right: $page-space-10;
  }
}
</style>
