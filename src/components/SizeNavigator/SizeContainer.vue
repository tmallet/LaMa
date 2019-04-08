<template>
  <div class="lm-size-container">
    <div v-for="row in rows" :key="row.id" class>
      <div
        v-for="col in row.cols"
        :key="col.id"
        class="lm-size-col-preview"
        :style="{width: col.sizes[size]/12*100+'%'}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SizeContainer",
  props: ["rows", "size"]
};
</script>

<style>
.lm-size-navigator .lm-size .lm-size-container {
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 0;
  right: 0;
}

.lm-size-navigator .lm-size .lm-size-container .lm-size-col-preview {
  display: inline-block;
  background-color: red;
  height: 10px;
  border-right: 1px solid black;
}
</style>
