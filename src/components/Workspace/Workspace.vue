<template>
  <div class="lm-workspace">
    <div class="lm-container">
      <WorkspaceColumns/>
      <WorkspaceLayout/>
    </div>
  </div>
</template>

<script>
import WorkspaceColumns from "./WorkspaceColumns";
import WorkspaceLayout from "./WorkspaceLayout";

export default {
  name: "Workspace",
  components: { WorkspaceColumns, WorkspaceLayout }
};
</script>

<style>
.lm-workspace {
  position: absolute;
  height: 100%;
  left: 176px;
  right: 400px;

  overflow-y: scroll;

  background-color: red;
}

.lm-workspace .lm-container {
  position: relative;
  width: 915px;
  min-height: 3000px;
  height: 100%;
  margin: auto;
}
</style>
