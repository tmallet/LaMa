<template>
  <div class="lm-layout">
    <WorkspaceRow
      v-for="row in rows"
      :key="row.id"
      :cols.sync="row.cols"
      :rowId="row.id"
      @removed="removeRow"
    />
    <WorkspaceNewRow @click.native="addRow"/>
  </div>
</template>

<script>
import WorkspaceNewRow from "./WorkspaceNewRow";
import WorkspaceRow from "./WorkspaceRow";

export default {
  name: "WorkspaceLayout",
  components: { WorkspaceNewRow, WorkspaceRow },
  data() {
    return {
      lastIndex: -1,
      rows: []
    };
  },
  methods: {
    addRow() {
      this.rows.push({
        id: this.lastIndex + 1,
        cols: []
      });
      this.lastIndex++;
    },
    removeRow(rowId) {
      this.rows = this.rows.filter(row => row.id !== rowId);
    }
  }
};
</script>

<style>
.lm-workspace .lm-layout {
  position: absolute;
  top: 10px;
  left: 0;
  min-width: 910px;
}
</style>
