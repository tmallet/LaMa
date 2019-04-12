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

<style>
.lm-columns {
  position: absolute;
  height: 100%;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  padding: 0 10px;
}

.lm-columns .col {
  height: 100%;
  background-color: #fff;
  margin-right: 10px;
  text-align: center;

  box-shadow: 2px 2px 5px grey;
}

.lm-columns .col:first-child {
  border-radius: 0 0 0 10px;
}

.lm-columns .col:last-child {
  border-radius: 0 0 10px 0;
}

.lm-columns .col:last-child {
  margin-right: 0;
}
</style>

