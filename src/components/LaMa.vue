<template>
  <div id="lama">
    <SizeNavigator/>
    <Workspace/>
    <Settings/>
  </div>
</template>

<script>
import SizeNavigator from "./SizeNavigator";
import Workspace from "./Workspace";
import Settings from "./Settings";

export default {
  name: "LaMa",
  components: { SizeNavigator, Workspace, Settings }
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
