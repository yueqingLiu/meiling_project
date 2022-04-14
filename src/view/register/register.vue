<template>
  <div class="testdiv">
    <div class="divborder newSearchDiv">
      <div class="filter">
        <label>{{ $t("10030") }}：</label>
        <Input class="searchInput" clearable v-model="evaluator" />
      </div>
    </div>
  </div>
</template>