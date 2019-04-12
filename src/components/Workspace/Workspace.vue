<template>
  <div class="lm-workspace">
    <div class="lm-container">
      <WorkspaceColumns/>
      <WorkspaceLayout :size="size" @updated="updated"/>
    </div>
  </div>
</template>

<script>
import WorkspaceColumns from "./WorkspaceColumns";
import WorkspaceLayout from "./WorkspaceLayout";

export default {
  name: "Workspace",
  components: { WorkspaceColumns, WorkspaceLayout },
  props: ["size"],
  methods: {
    updated(rows) {
      this.$emit("updated", rows);
    }
  }
};
</script>

<style>
.lm-workspace {
  position: absolute;
  height: 100%;
  left: 176px;
  right: 400px;

  overflow-y: auto;

  background-color: red;
}

.lm-container {
  position: relative;
  width: 910px;
  margin: auto;
}
</style>
