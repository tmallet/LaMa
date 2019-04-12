<template>
  <div class="lm-layout">
    <WorkspaceRow
      v-for="row in rows"
      :key="row.id"
      :cols.sync="row.cols"
      :rowId="row.id"
      :customClasses.sync="row.customClasses"
      :size="size"
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
  props: ["size"],
  data() {
    return {
      lastIndex: -1,
      rows: []
    };
  },
  watch: {
    rows: {
      deep: true,
      handler: function() {
        this.$emit("updated", this.rows);
      }
    }
  },
  methods: {
    addRow() {
      this.rows.push({
        id: this.lastIndex + 1,
        customClasses: [],
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
.lm-layout {
  position: relative;
  top: 10px;
  left: 0;
  min-width: 910px;
  padding-bottom: 20px;
}
</style>
