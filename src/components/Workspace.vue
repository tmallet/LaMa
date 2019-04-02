<template>
  <div class="lm-workspace">
    <div class="lm-container">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Workspace"
};
</script>

<style>
.lm-workspace {
  position: absolute;
  height: 100%;
  left: 176px;
  right: 400px;

  overflow-y: scroll;

  background-color: red;
}

.lm-workspace .lm-container {
  width: 800px;
  min-height: 3000px;
  height: 100%;
  margin: auto;
}

.lm-workspace .lm-columns {
  height: 100%;
}

.lm-workspace .lm-columns .col {
  height: 100%;
  background-color: whitesmoke;
  margin-right: 10px;
  text-align: center;
}

.lm-workspace .lm-columns .col:last-child {
  margin-right: 0;
}
</style>
