<template>
  <div :class="'lm-size' + (active ? ' active' : '') ">
    <div class="lm-size-header">
      {{sizeName}}
      <span class="lg-size-icon">
        <font-awesome-icon :icon="iconName"/>
      </span>
    </div>
    <SizeContainer :rows="rows" :size="size"/>
  </div>
</template>

<script>
import SizeContainer from "./SizeContainer";

export default {
  props: ["sizeName", "iconName", "active", "rows", "size"],
  components: { SizeContainer }
};
</script>

<style>
.lm-size-navigator .lm-size {
  position: relative;

  height: 25%;
  width: 100%;

  cursor: pointer;
}

.lm-size-navigator .lm-size.active {
  background-color: greenyellow;
}

.lm-size-navigator .lm-size-header {
  padding: 0 15px;
}

.lm-size-navigator .lg-size-icon {
  float: right;
}
</style>
