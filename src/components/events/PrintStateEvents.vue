<template>
  <div class="mt-5">
    <strong>The current state is: </strong>
    {{ values.example }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PrintStateEvents",
  computed: {
    ...mapState(["values"]),
    example() {
      return this.values.example;
    }
  },
  created() {
    this.$store.getters.values;
  }
};
</script>
