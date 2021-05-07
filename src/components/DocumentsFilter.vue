<template>
  <section class="documents-filter">
    <a href="#" class="toggle-filter" @click.prevent="toggleFilter"
      ><span>Filter by</span>
    </a>
    <div class="documents-filter__inner" :class="{ opened: sidebarOpened }">
      <h3>
        Filter by
        <a href="#" @click.prevent="toggleFilter" class="close"></a>
      </h3>
      <v-date-picker
        v-model="dateFrom"
        :masks="masks"
        :popover="{ placement: 'bottom', visibility: 'click' }"
      >
        <template v-slot="{ inputValue, inputEvents }">
          <div class="datepicker--inner">
            <span class="datepicker-icon datepicker-icon--dateIcon"></span>
            <input
              class="bg-white border px-2 py-1 rounded"
              :value="inputValue"
              placeholder="From"
              v-on="inputEvents"
            />
            <span class="datepicker-icon datepicker-icon--arrowIcon"></span>
          </div>
        </template>
      </v-date-picker>
      <v-date-picker
        v-model="dateTo"
        :masks="masks"
        :popover="{ placement: 'bottom', visibility: 'click' }"
      >
        <template v-slot="{ inputValue, inputEvents }">
          <div class="datepicker--inner">
            <span class="datepicker-icon datepicker-icon--dateIcon"></span>
            <input
              class="bg-white border px-2 py-1 rounded"
              :value="inputValue"
              placeholder="To"
              v-on="inputEvents"
            />
            <span class="datepicker-icon datepicker-icon--arrowIcon"></span>
          </div>
        </template>
      </v-date-picker>
      <div class="documents-filter__form">
        <button type="button" class="btn btn--apply" @click="applyFilter">
          Apply filters
        </button>
        <button type="button" class="btn btn--clear" @click="clearFilters">
          Clear filters
        </button>
      </div>
      <div class="error" v-if="error">
        <p>{{ errorText }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, reactive } from "vue";
import { compareDates } from "@/utils/helper";
import { useStore } from "@/store/store";
export default defineComponent({
  name: "DocumentsFilter",
  async setup() {
    const store = useStore();
    const { methods } = store;
    const error = ref(false);
    const sidebarOpened = ref(false);
    const errorText = ref("");
    const dateFrom = ref("");
    const dateTo = ref("");
    const masks = reactive({
      input: "DD-MM-YYYY",
    });

    // handle Apply filter
    const applyFilter = () => {
      if (dateFrom.value === "" || dateFrom.value === null) {
        error.value = true;
        errorText.value = "Input value can't be null";
      } else if (dateTo.value == "" || dateTo.value === null) {
        error.value = true;
        errorText.value = "Input value can't be null";
      } else if (compareDates(dateFrom, dateTo)) {
        error.value = true;
        errorText.value = "Date To should be bigger than Date From";
      } else {
        error.value = false;
        methods.filterByDate(dateFrom.value, dateTo.value);
        toggleFilter();
      }
    };

    // clear filter
    const clearFilters = () => {
      dateFrom.value = "";
      dateTo.value = "";
      methods.resetFilter();
      toggleFilter();
    };
    // handle filter on mobile view
    const toggleFilter = () => {
      sidebarOpened.value = !sidebarOpened.value;
    };
    return {
      error,
      errorText,
      dateFrom,
      dateTo,
      masks,
      applyFilter,
      clearFilters,
      toggleFilter,
      sidebarOpened,
    };
  },
});
</script>

<style lang="scss">
.documents-filter {
  position: relative;
  &__inner {
    background: $gray;
    padding: $page-space-15;
    border-radius: $border-radius-default;
    box-shadow: $default-boxshadow;
    transform: translateX(-300px);
    transition: transform 0.3s ease-in-out;
    position: absolute;
    left: -20px;
    width: 200px;
    @include mq(md) {
      transform: none;
      position: inherit;
      left: inherit;
      width: auto;
    }
    &.opened {
      transform: translateX(0px);
    }
  }

  h3 {
    color: $dark-gray;
    margin-top: 0;
    margin-bottom: $page-space-15;
    font-weight: $font-weight-medium;
    font-size: $font-size-large;
    position: relative;
  }

  .close {
    position: absolute;
    right: 0;
    background-image: url("../assets/close.svg");
    background-repeat: no-repeat;
    width: 13px;
    height: 13px;
    top: 4px;
    background-size: 11px;
    @include mq(md) {
      display: none;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    .btn {
      border-radius: $border-radius-default;
      border: medium none;
      color: $white;
      margin-bottom: $page-space-15;
      letter-spacing: 0;
      width: 100%;
      min-height: 35px;
      font-weight: $font-weight-medium;
      cursor: pointer;
      &--apply {
        background: $dark-blue-lighter;
      }
      &--clear {
        background: $orange;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .datepicker--inner {
    position: relative;
    margin-bottom: $page-space-15;
    .datepicker-icon {
      position: absolute;
      display: block;
      width: 18px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      background-size: 13px;
      background-repeat: no-repeat;
      &--dateIcon {
        background-image: url("../assets/date.svg");
        left: 8px;
        height: 13px;
      }
      &--arrowIcon {
        background-image: url("../assets/arrow-down.svg");
        right: 8px;
        background-size: 18px;
        height: 11px;
      }
    }

    input {
      border-radius: $border-radius-default;
      border: medium none;
      background: $white;
      border: 1px solid $silver;
      padding: 8px 28px 8px 28px;
      box-sizing: border-box;
      width: 100%;
    }
  }

  .error {
    color: $red;
    font-size: $font-size-small;
  }

  .toggle-filter {
    position: absolute;
    left: -20px;
    background: $light-silver;
    box-shadow: $default-boxshadow;
    text-decoration: none;
    font-size: $font-size-small;
    padding: $page-space-20 $page-space-5;
    border-radius: 0px $border-radius-default $border-radius-default 0px;
    width: 25px;
    display: block;
    @include mq(md) {
      display: none;
    }
    span {
      display: block;
      writing-mode: sideways-lr;
      margin-left: 3px;
      color: $dim-gray;
    }
  }
}
</style>
