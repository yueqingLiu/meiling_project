<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}

// 查询条件或者table的外边框样式
.divborder {
  margin-top: 10px;
  padding: 10px 5px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 1px rgba(216, 216, 216, 0.5);
}
//按钮整体样式
.buttonall {
  margin-left: 25px;
  button {
    margin-right: 10px;
  }
  .twoWord {
    padding: 5px 7.5px 6px;
    border-radius: 3px;
  }
}
/*************  web UI 菜单  start *******************/
@width_1: 140px;
@height_1: 29px;
@fontSize_1: 12px;
@backgroundColor: #2b85e4; //蓝色背景色
@backgroundColorTr: #f5f6f7; //table 隔行换色
/*************  web UI 搜索部分 start**************/
.treeItemdiv {
  margin: 0px !important;
  height: 89vh;
}
.newSearchDiv,
.newModalClass {
  padding: 15px 5px 5px;
  margin: 0px;
  .filter {
    display: inline-block;
    height: 39px;
    font-size: @fontSize_1;
    margin-right: 5px;
    margin-top: 0px;
    span {
      font-size: @fontSize_1;
    }
  }
  label {
    width: 100px;
    display: inline-block;
    text-align: right;
    font-size: @fontSize_1;
    i {
      color: red;
      margin-right: 5px !important;
    }
  }
  .ivu-radio-wrapper,
  .ivu-checkbox-default {
    width: 65px;
    display: inline-block;
    text-align: left;
  }
  //禁止换行
  .nowropStyle {
    overflow: hidden;
    white-space: nowrap;
  }
  // input
  .searchInput {
    width: @width_1;
    height: @height_1;
    font-size: @fontSize_1;
    display: inline-block;
    line-height: @height_1;
    .ivu-input,
    .ivu-input-number-input,
    .ivu-input-number,
    .ivu-input-number-input-wrap {
      width: 100%;
      height: @height_1;
      border-radius: 3px;
      font-size: @fontSize_1;
      line-height: @height_1;
    }
    .ivu-input-prefix i,
    .ivu-input-suffix i {
      height: @height_1;
      line-height: @height_1;
    }
  }
  // select
  .searchSelect {
    width: @width_1;
    height: @height_1;
    font-size: @fontSize_1;
    display: inline-block;
    .ivu-select-selection,
    .ivu-input {
      width: 100%;
      height: @height_1;
      line-height: @height_1;
      border-radius: 3px;
      font-size: @fontSize_1;
      min-height: @height_1!important;
      overflow: hidden;
      .ivu-select-placeholder,
      .ivu-select-selected-value {
        height: @height_1;
        font-size: @fontSize_1;
        line-height: @height_1;
        min-height: @height_1;
      }
      .ivu-select-input,
      .ivu-input {
        height: @height_1;
        font-size: @fontSize_1;
        line-height: @height_1;
        min-height: @height_1;
      }
      div {
        overflow: hidden;
      }
    }
    .ivu-select-item {
      padding: 6px 16px;
      font-size: @fontSize_1!important;
    }
    .ivu-select-item:hover {
      background: #e2f1fb;
    }
    .ivu-select-item-focus {
      background: #e2f1fb;
    }
    .ivu-cascader .ivu-cascader-menu-item {
      font-size: @fontSize_1!important;
    }
  }
  //button
  .searchBtn {
    margin-left: 25px;
    button {
      margin-right: 15px;
      margin-bottom: 10px;
    }
    .intervalRight {
      margin-right: 50px;
    }
    .twoWord {
      padding: 5px 7.5px 6px;
      border-radius: 3px;
    }
    .fourWord {
      padding: 5px 6.5px 6px;
      border-radius: 3px;
    }
    .sixWord {
      padding: 5px 11px 6px;
      border-radius: 3px;
    }
    .ivu-btn {
      font-size: @fontSize_1;
    }
  }
  //宽度设置
  .minWidth {
    width: 100px;
  }
  .middleWidth {
    width: 200px;
  }
  .MaxWidth {
    width: 300px;
  }
  .MaxWidth2 {
    width: 390px;
  }
  //右边距
  .marginR_o {
    margin-right: 10px;
  }
}
/*************  web UI 搜索部分 end**************/

/*************  web UI table部分 start**************/
//隔行换色
// .ivu-table-wrapper .ivu-table-body tr:nth-child(2n) td,
// .ivu-table-wrapper .ivu-table-fixed-body tr:nth-child(2n) td {
//   background-color: @backgroundColorTr;
// }
.newTableDiv {
  padding: 0px;
  font-size: @fontSize_1!important;
  //隔行换色
  // .ivu-table-wrapper .ivu-table-body tr:nth-child(2n) td,
  // .ivu-table-wrapper .ivu-table-fixed-body tr:nth-child(2n) td {
  //   background-color: @backgroundColorTr;
  // }
  .tableClass {
    min-width: 600px;
    overflow-x: auto;
    .ivu-table {
      font-size: @fontSize_1!important;
      .ivu-table-header {
        th {
          border-bottom: 3px solid #dee1e4;
          .ivu-table-column-center {
            border-bottom: 2px solid #dee1e4;
          }
        }
      }
    }
    //滚动条样式
    // ::-webkit-scrollbar{
    //   height:15px;
    // }
    //轨道条里的小方块
    // ::-webkit-scrollbar-thumb{
    //   background-color:#fff;
    //   border-radius: 5.5px;
    // }
    //轨道条里的轨道
    // ::-webkit-scrollbar-track{
    //   background-color:#ddd;
    // }
  }
  .pageDiv {
    margin: 20px;
    overflow: hidden;
    .pageDirection {
      float: right;
    }
  }
}
/*************  web UI table部分 end**************/

/*************  web UI Modal弹窗部分 start**************/
.newModalClass {
  //隔行换色
  .ivu-table-wrapper .ivu-table-body tr:nth-child(2n) td,
  .ivu-table-wrapper .ivu-table-fixed-body tr:nth-child(2n) td {
    background-color: @backgroundColorTr;
  }
  .tableClass {
    min-width: 600px;
    overflow-x: auto;
    .ivu-table {
      font-size: @fontSize_1!important;
    }
  }
  .ivu-modal-wrap {
    text-align: center;
    white-space: nowrap;
  }
  .ivu-modal-wrap:after {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .ivu-modal {
    // margin-top: -20px;
    //宽度自适应
    // width: -moz-min-content;
    // width: -webkit-min-content;
    // width: min-content;
    // width:800px!important;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    font-size: 14px;
    white-space: normal;
    top: 0;
    .ivu-modal-header {
      height: 53px;
      padding: 16px 25px;
      background-color: @backgroundColor;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      .ivu-modal-header-inner,
      span {
        color: #fff;
      }
    }
    .ivu-modal-close {
      right: 16px;
      top: 11px;
      .ivu-icon-ios-close {
        color: #fff;
      }
    }
    .ivu-modal-body {
      padding: 30px 0px 30px 40px;
    }
    .ivu-modal-footer {
      padding: 17px 20px;
    }
    //上传图片 上传文件
    .uploadMax {
      width: 155px;
      height: 155px;
      border: 3px dashed #ddd;
      border-radius: 5px;
      display: block;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      img {
        width: initial;
        height: initial;
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      input {
        position: absolute;
        top: 0px;
        left: 0px;
        opacity: 0;
        width: 155px;
        height: 155px;
        cursor: pointer;
      }
    }
  }
}
.newModalClass1 {
  .ivu-modal {
    .ivu-modal-header {
      height: 53px;
      padding: 16px 25px;
      background-color: @backgroundColor;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      .ivu-modal-header-inner,
      span {
        color: #fff;
      }
    }
    .ivu-modal-close {
      right: 16px;
      top: 11px;
      .ivu-icon-ios-close {
        color: #fff;
      }
    }
    .ivu-modal-body {
      padding: 30px;
      .filter {
        label {
          min-width: 100px;
        }
      }
    }
    .ivu-modal-footer {
      padding: 17px 20px;
    }
  }
}
//confirm  弹窗确认样式
.v-transfer-dom {
  .ivu-modal {
    .ivu-modal-content {
      .ivu-modal-confirm-head {
        // text-align: center;
        text-align: left;
        margin-top: 33px;
        margin-bottom: -10px;
      }
    }
  }
}
/*************  web UI Modal弹窗部分 end**************/

/*************  web UI echart部分 start**************/
.newEchartStyle {
  .echartsId {
    height: 400px !important;
  }
  //隔行换色
  .ivu-table-wrapper .ivu-table-body tr:nth-child(2n) td,
  .ivu-table-wrapper .ivu-table-fixed-body tr:nth-child(2n) td {
    background-color: @backgroundColorTr;
  }
  .echartsTable {
    margin: 20px 60px;
    .ivu-table {
      font-size: @fontSize_1!important;
    }
  }
}
/*************  web UI echart部分 end**************/
</style>
