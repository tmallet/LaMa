<template>
  <div id="lama">
    <SizeNavigator :size.sync="size" :rows="rows"/>
    <Workspace :size="size" @updated="workspaceUpdate"/>
    <Settings :size="size" :rows="rows"/>
  </div>
</template>

<script>
import SizeNavigator from "./SizeNavigator/SizeNavigator";
import Workspace from "./Workspace/Workspace";
import Settings from "./Settings";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import "bootstrap/scss/bootstrap.scss";

export default {
  name: "LaMa",
  components: { SizeNavigator, Workspace, Settings },
  data() {
    return {
      size: "md",
      rows: []
    };
  },
  methods: {
    workspaceUpdate(rows) {
      this.rows = [...rows];
    }
  }
};
</script>

<style>
#lama {
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  background-color: #f3f3f4;
}
</style>
