<template>
  <!-- 菜品类型管理 -->
  <div class="testdiv">
    <div class="divborder newSearchDiv">
      <div class="filter">
        <label>{{ $t("10033") }}：</label>
        <Input class="searchInput" clearable v-model="dishTypeName" />
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
    <Modal class="newModalClass" v-model="showModal" :width="350">
      <p slot="header">
        <span v-if="type === 1">{{ $t("1002") }}</span>
        <span v-if="type === 2">{{ $t("1003") }}</span>
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
          <label><i>*</i>{{ $t("10029") }}：</label>
          <InputNumber
            class="searchInput"
            clearable
            v-model="modalObj.dishContent"
          />
        </div>
      </div>
      <div slot="footer">
        <Button @click="showModal = false">{{ $t("1005") }}</Button>
        <Button
          type="primary"
          :loading="isLoading"
          @click="addCommit"
          v-if="type === 1"
        >
          <span>{{ $t("1002") }}</span>
        </Button>
        <Button
          type="primary"
          :loading="isLoading"
          @click="editCommit"
          v-if="type === 2"
        >
          <span>{{ $t("1003") }}</span>
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dishTypeName: "", // 菜品类型名
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
          title: this.$t("10033"), // 菜品类型名
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
    addCommit() {
      this.type = 1;
      this.showModal = false;
    },
    editCommit() {
      this.type = 2;
      this.showModal = false;
    },
    dishTypeChange() {},
  },
};
</script>

<style lang="less" scoped>
</style>