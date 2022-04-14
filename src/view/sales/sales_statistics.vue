<template>
  <!-- 销量排行 -->
  <div class="testdiv">
    <div class="divborder newSearchDiv">
      <div class="filter">
        <label>{{ $t("10027") }}：</label>
        <TimePicker
          format="HH:mm"
          v-model="startTime"
          class="searchSelect"
        ></TimePicker>
      </div>
      <div class="filter">
        <label>{{ $t("10028") }}：</label>
        <TimePicker
          format="HH:mm"
          v-model="endTime"
          class="searchSelect"
        ></TimePicker>
      </div>
      <div class="searchBtn">
        <Button
          type="primary"
          class="twoWord"
          icon="ios-search"
          @click="toSearch"
          >{{ $t("1001") }}</Button
        >
      </div>
    </div>
    <div class="divborder newTableDiv">
      <Table
        highlight-row
        class="tableClass"
        :loading="isLoading"
        :data="tableData"
        :columns="tableColumns"
        @on-current-change="handleRowChange"
      ></Table>
      <div class="pageDiv">
        <div class="pageDirection">
          <Page
            show-total
            show-sizer
            show-elevator
            :total.sync="total"
            :current.sync="page"
            :page-size.sync="pagesize"
            @on-change="handlePage"
            @on-page-size-change="handlePageSize"
            :page-size-opts="[10, 20, 30, 40, 100]"
          ></Page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: "", // 开始时间
      endTime: "", // 结束时间
      isLoading: false,
      row: {},
      tableData: [{}],
      tableColumns: [
        {
          title: this.$t("10054"), // 排行
          key: "",
        },
        {
          title: this.$t("10022"), // 菜品名称
          key: "",
        },
        {
          title: this.$t("10025"), // 图片
          key: "",
        },
        {
          title: this.$t("10055"), // 数量
          key: "",
        },
      ],
      total: 0,
      page: 1,
      pagesize: 10,
    };
  },
  mounted() {},
  methods: {
    // 查询
    toSearch() {},
    // 监听表格选中行
    handleRowChange(v) {
      this.row = v;
    },
    handlePage(val) {
      this.page = val;
      this.toSearch();
    },
    handlePageSize(val) {
      this.pagesize = val;
      this.toSearch();
    },
  },
};
</script>

<style lang="less" scoped>
</style>