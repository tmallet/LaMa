<template>
  <div class="lm-size-navigator">
    <SizeOption
      sizeName="Téléphone"
      iconName="mobile-alt"
      :active="size == 'xs'"
      @click.native="changeSize('xs')"
    />
    <SizeOption
      sizeName="Tablette"
      iconName="tablet-alt"
      :active="size == 'sm'"
      @click.native="changeSize('sm')"
    />
    <SizeOption
      sizeName="Petit écran"
      iconName="laptop"
      :active="size == 'md'"
      @click.native="changeSize('md')"
    />
    <SizeOption
      sizeName="Grand écran"
      iconName="desktop"
      :active="size == 'lg'"
      @click.native="changeSize('lg')"
    />
  </div>
</template>

<script>
import SizeOption from "./SizeOption";

export default {
  name: "SizeNavigator",
  components: { SizeOption },
  props: ["size"],
  methods: {
    changeSize(size) {
      this.$emit("update:size", size);
    }
  }
};
</script>

<style>
.lm-size-navigator {
  position: absolute;
  height: 100%;
  left: 0;
  width: 176px;

  background-color: green;
}
</style>
