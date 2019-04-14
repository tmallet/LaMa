<template>
  <VuePerfectScrollbar class="lm-workspace">
    <div class="lm-container">
      <WorkspaceColumns/>
      <WorkspaceLayout :size="size" @updated="updated"/>
    </div>
  </VuePerfectScrollbar>
</template>

<script>
import WorkspaceColumns from "./WorkspaceColumns";
import WorkspaceLayout from "./WorkspaceLayout";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  name: "Workspace",
  components: { WorkspaceColumns, WorkspaceLayout, VuePerfectScrollbar },
  props: ["size"],
  methods: {
    updated(rows) {
      this.$emit("updated", rows);
    }
  }
};
</script>

<style lang="scss">
.lm-workspace {
  position: absolute !important;
  height: 100%;
  left: 176px;
  right: 400px;
}

.lm-container {
  position: relative;
  width: 910px;
  margin: auto;
  padding-left: 15px;
}
</style>
