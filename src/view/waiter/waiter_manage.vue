<template>
  <!-- 送餐员管理 -->
  <div class="testdiv">
    <div class="divborder newSearchDiv">
      <div class="filter">
        <label>{{ $t("10041") }}：</label>
        <Input class="searchInput" clearable v-model="waiterName" />
      </div>
      <div class="searchBtn">
        <Button
          type="primary"
          class="twoWord"
          icon="ios-search"
          @click="toSearch"
          >{{ $t("1001") }}</Button
        >
        <Button type="success" class="twoWord" icon="ios-add" @click="add">{{
          $t("1002")
        }}</Button>
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
          <Button type="warning" class="twoWord" @click="edit(row)">{{
            $t("1003")
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
      waiterName: "", // 送餐员名
      isLoading: false,
      row: {},
      tableData: [{}],
      tableColumns: [
        {
          type: "selection",
          width: 80,
          align: "center",
        },
        {
          title: this.$t("10041"), // 送餐员名
          align: "center",
          key: "",
        },
        {
          title: this.$t("10042"), // 性别
          align: "center",
          key: "",
        },
        {
          title: this.$t("10043"), // 电话
          align: "center",
          key: "",
        },
        {
          title: this.$t("10025"), // 图片
          align: "center",
          key: "",
        },
        {
          title: this.$t("10026"), // 操作
          align: "center",
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
    // 添加
    add() {
      this.type = 1;
      this.showModal = true;
    },
    // 删除
    del() {},
    // 监听表格选中行
    handleRowChange(v) {
      this.row = v;
    },
    // 修改
    edit(id) {
      // console.log("./././.", id);
      this.type = 2;
      this.showModal = true;
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