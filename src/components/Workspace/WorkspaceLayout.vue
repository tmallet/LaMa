<template>
  <div class="lm-layout">
    <WorkspaceRow/>
    <WorkspaceNewRow/>
  </div>
</template>

<script>
import WorkspaceNewRow from "./WorkspaceNewRow";
import WorkspaceRow from "./WorkspaceRow";

export default {
  name: "WorkspaceLayout",
  components: { WorkspaceNewRow, WorkspaceRow }
};
</script>

<style>
.lm-workspace .lm-layout {
  position: absolute;
  top: 10px;
  left: 0;
  min-width: 915px;
}
</style>
