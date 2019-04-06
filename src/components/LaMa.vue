<template>
  <div id="lama">
    <SizeNavigator :size.sync="size"/>
    <Workspace :size="size"/>
    <Settings/>
  </div>
</template>

<script>
import SizeNavigator from "./SizeNavigator/SizeNavigator";
import Workspace from "./Workspace/Workspace";
import Settings from "./Settings";

export default {
  name: "LaMa",
  components: { SizeNavigator, Workspace, Settings },
  data() {
    return {
      size: "md"
    };
  }
};
</script>

<style>
#lama {
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
}
</style>
