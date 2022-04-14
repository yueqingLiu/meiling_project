<template>
  <!-- 订餐 -->
  <div class="testdiv">
    <div class="divborder newSearchDiv">
      <div class="filter">
        <label>{{ $t("10022") }}：</label>
        <Input class="searchInput" clearable v-model="dishName" />
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
      >
        <template slot-scope="{ row }" slot="section">
          <Button type="info" class="twoWord" @click="orderMeal(row)">{{
            $t("10014")
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
    <Modal class="newModalClass" v-model="showModal" :width="360">
      <p slot="header">
        <span>{{ $t("10014") }}</span>
      </p>
      <div class="modal_body">
        <div class="filter">
          <label><i>*</i>{{ $t("10022") }}：</label>
          <Input class="searchInput" clearable v-model="modalObj.dishName" />
        </div>
        <div class="filter">
          <label><i>*</i>{{ $t("10023") }}：</label>
          <Select
            clearable
            class="searchSelect"
            v-model="modalObj.dishType"
            @on-change="dishTypeChange"
          >
            <Option
              v-for="(item, index) in dishTypeList"
              :value="item.code"
              :label="item.name"
              :key="index"
            ></Option>
          </Select>
        </div>
        <div class="filter">
          <label><i>*</i>{{ $t("10024") }}：</label>
          <InputNumber class="searchInput" clearable v-model="modalObj.price" />
        </div>
        <div class="filter">
          <label><i>*</i>{{ $t("10034") }}：</label>
          <InputNumber
            class="searchInput"
            clearable
            v-model="modalObj.orderName"
          />
        </div>
        <div class="filter">
          <label style="width: 106px"><i>*</i>{{ $t("10035") }}：</label>
          <InputNumber
            class="searchInput"
            clearable
            v-model="modalObj.orderTel"
          />
        </div>
      </div>
      <div slot="footer">
        <Button @click="showModal = false">{{ $t("1008") }}</Button>
        <Button type="primary" :loading="isLoading" @click="saveCommit">
          <span>{{ $t("1007") }}</span>
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dishName: "", // 菜品名
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
          title: this.$t("10022"), // 菜品名称
          key: "",
        },
        {
          title: this.$t("10023"), // 菜品类型
          key: "",
        },
        {
          title: this.$t("10024"), // 价格
          key: "",
        },
        {
          title: this.$t("10025"), // 图片
          key: "",
        },
        {
          title: this.$t("10026"), // 操作
          slot: "section",
        },
      ],
      showModal: false,
      modalObj: {},
      dishTypeList: [],
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
    // 监听表格选中行
    handleRowChange(v) {
      this.row = v;
    },
    // 订餐
    orderMeal(id) {
      // console.log("./././.", id);
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
    dishTypeChange() {},
    saveCommit() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="less" scoped>
</style>