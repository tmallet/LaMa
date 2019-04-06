<template>
  <div :class="'lm-size' + (active ? ' active' : '') ">
    <div class="lm-size-header">
      {{sizeName}}
      <span class="lg-size-icon">
        <font-awesome-icon :icon="iconName"/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sizeName", "iconName", "active"]
};
</script>

<style>
.lm-size-navigator .lm-size {
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
