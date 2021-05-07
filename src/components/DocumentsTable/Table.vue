<template>
  <div class="documents-table">
    <table class="documents-table__table">
      <thead>
        <tr>
          <th class="name" scope="col" @click="sortDataByName">
            Document Name
            <a
              href="javascript:;"
              :class="getFilterClass('name')"
              class="sort--link"
            ></a>
          </th>
          <th class="date" scope="col" @click="sortDataByDate">
            Date
            <a
              href="javascript:;"
              :class="getFilterClass('date')"
              class="sort--link"
            ></a>
          </th>
        </tr>
      </thead>
      <tbody v-if="documentsToDisplay.length > 0">
        <tr
          v-for="(item, index) in documentsToDisplay"
          :key="index"
          :class="{ odd: index % 2 === 0, even: index % 2 !== 0 }"
        >
          <td>{{ item.name }}</td>
          <td>
            {{ timeFilter(item.date) }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="2">
            <span class="text">Documents not found</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import moment from "moment";
import { useStore } from "@/store/store";

export default defineComponent({
  name: "DocumentsTable",
  props: {
    data: {
      type: Array,
      required: true,
    },
    currentPage: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 6,
    },
  },
  methods: {
    timeFilter(date: string) {
      if (!date) return "";
      date = date.toString();
      return moment(date).format("DD-MM-YYYY");
    },
  },
  async setup(props) {
    const store = useStore();
    const { methods, getters } = store;
    // handle the data for the table
    const documentsToDisplay = computed(() => {
      const { currentPage, itemsPerPage, data } = props;
      const initialIndex = (currentPage - 1) * itemsPerPage;
      const finalIndex = initialIndex + itemsPerPage;
      return data.slice(initialIndex, finalIndex);
    });
    // handle the sort icon class
    const getFilterClass = (val: string) => {
      if (val === "date") {
        return getters.sortDateType();
      }
      if (val === "name") {
        return getters.sortNameType();
      }
    };

    // sortDataByDate
    const sortDataByDate = () => {
      methods.setSortNameType("");
      if (getters.sortDateType() === "asc") {
        methods.setSortDateType("desc");
        methods.sortByDate("desc");
      } else {
        methods.setSortDateType("asc");
        methods.sortByDate("asc");
      }
    };

    // sortDataByName
    const sortDataByName = () => {
      methods.setSortDateType("");
      if (getters.sortNameType() === "asc") {
        methods.setSortNameType("desc");
        methods.sortByName("desc");
      } else {
        methods.setSortNameType("asc");
        methods.sortByName("asc");
      }
    };
    return {
      documentsToDisplay,
      getFilterClass,
      sortDataByDate,
      sortDataByName,
    };
  },
});
</script>

<style lang="scss">
.documents-table {
  &__table {
    width: 100%;
    border-collapse: collapse;
    th {
      text-align: left;
      color: $dareker-gray;
      line-height: 1.1;
      letter-spacing: 0;
      padding: $page-space-15;
      cursor: pointer;
      &.name {
        width: 60%;
      }
      &.date {
        width: 40%;
        padding-left: $page-space-30;
      }
      .sort--link {
        letter-spacing: 0;
        text-align: left;
        text-decoration: none;
        display: inline-block;
        width: 7px;
        height: 7px;
        vertical-align: middle;
        margin-left: 3px;
        background-repeat: no-repeat;
        background-size: 6px;
        &.asc {
          background-image: url("../../assets/table-arrow-down.svg");
        }

        &.desc {
          background-image: url("../../assets/table-arrow-down.svg");
          transform: rotate(180deg);
        }
      }
    }
    tbody {
      tr {
        &.even {
          background: #cbcbcb;
        }
        &.odd {
          background: $white;
        }
        td {
          height: 44px;
          max-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: left;
          color: $dareker-gray;
          line-height: 1.1;
          letter-spacing: 0;
          padding-left: $page-space-15;
          padding-right: $page-space-15;
          @include mq(md) {
            height: 33px;
          }
        }
      }
    }
  }
}
</style>
