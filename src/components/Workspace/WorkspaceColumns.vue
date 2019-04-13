<template>
  <div class="row lm-columns">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceColumns"
};
</script>

<style lang="scss">
.lm-columns {
  position: absolute;
  height: 100%;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  padding: 0 10px;

  .col {
    height: 100%;
    background-color: #fff;
    margin-right: 10px;
    text-align: center;

    &:first-child {
      border-radius: 0 0 0 10px;
    }

    &:last-child {
      border-radius: 0 0 10px 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>