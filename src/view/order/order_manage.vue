<template>
  <!-- 订单管理 -->
  <div class="testdiv">
    <div class="divborder newSearchDiv">
      <div class="filter">
        <label>{{ $t("10022") }}：</label>
        <Input class="searchInput" clearable v-model="dishName" />
      </div>
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
        <Button type="error" class="twoWord" icon="ios-close" @click="del">{{
          $t("1004")
        }}</Button>
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
      >
        <template slot-scope="{ row }" slot="section">
          <Button type="warning" class="twoWord" @click="detail(row)">{{
            $t("1009")
          }}</Button>
        </template>
      </Table>
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
      dishName: "", // 菜品名
      startTime: "", // 开始时间
      endTime: "", // 结束时间
      isLoading: false,
      row: {},
      tableData: [{}],
      tableColumns: [
        {
          type: "selection",
          width: 100,
          align: "center",
        },
        {
          title: this.$t("10036"), // 订单号
          key: "",
        },
        {
          title: this.$t("10022"), // 菜品名称
          key: "",
        },
        {
          title: this.$t("10024"), // 价格
          key: "",
        },
        {
          title: this.$t("10055"), // 数量
          key: "",
        },
        {
          title: this.$t("10047"), // 创建时间
          key: "",
        },
        {
          title: this.$t("10038"), // 支付人
          key: "",
        },
        {
          title: this.$t("10037"), // 联系方式
          key: "",
        },
        {
          title: this.$t("10056"), // 支付金额
          key: "",
        },
        {
          title: this.$t("10039"), // 支付时间
          key: "",
        },
        {
          title: this.$t("10040"), // 支付方式
          key: "",
        },
        {
          title: this.$t("10026"), // 操作
          slot: "section",
        },
      ],
      type: 0,
      total: 0,
      page: 1,
      pagesize: 10,
    };
  },
  mounted() {},
  methods: {
    // 查询
    toSearch() {},
    // 删除
    del() {},
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
    detail() {},
  },
};
</script>

<style lang="less" scoped>
</style>