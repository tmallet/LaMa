<template>
  <div :class="'lm-size lm-size-' + size + (active ? ' active' : '')">
    <div class="lm-size-header">
      <FontAwesomeIcon :icon="iconName" size="lg"/>
    </div>
    <SizeContainer :rows="rows" :size="size"/>
  </div>
</template>

<script>
import SizeContainer from "./SizeContainer";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  props: ["iconName", "active", "rows", "size"],
  components: { SizeContainer, FontAwesomeIcon }
};
</script>

<style lang="scss">
.lm-size {
  position: relative;
  height: 20%;
  width: 100%;
  cursor: pointer;
  border-radius: 15px;
  transition: background-color 500ms ease;

  .lm-size-header {
    position: absolute;
    left: 0;
    right: 0;
    top: 5px;
    text-align: center;
  }

  &.active .lm-size-header,
  &:hover .lm-size-header {
    color: #fff;
  }
}

.lm-size-xs .lm-size-header {
  color: rgb(149, 65, 42);
}

.lm-size-xs.active,
.lm-size-xs:hover {
  background-color: rgb(149, 65, 42);
}

.lm-size-sm .lm-size-header {
  color: rgb(55, 93, 157);
}

.lm-size-sm.active,
.lm-size-sm:hover {
  background-color: rgb(55, 93, 157);
}

.lm-size-md .lm-size-header {
  color: rgb(42, 149, 134);
}

.lm-size-md.active,
.lm-size-md:hover {
  background-color: rgb(42, 149, 134);
}

.lm-size-lg .lm-size-header {
  color: rgb(217, 105, 25);
}

.lm-size-lg.active,
.lm-size-lg:hover {
  background-color: rgb(217, 105, 25);
}

.lm-size-xl .lm-size-header {
  color: rgb(237, 177, 67);
}

.lm-size-xl.active,
.lm-size-xl:hover {
  background-color: rgb(237, 177, 67);
}
</style>
