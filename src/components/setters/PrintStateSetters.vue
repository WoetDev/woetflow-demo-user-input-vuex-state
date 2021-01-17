<template>
  <div class="mt-5">
    <strong>The current state is: </strong>
    {{ example }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PrintStateSetters",
  computed: {
    ...mapState(["values"]),
    example: {
      get() {
        return this.values.example;
      }
    }
  }
};
</script>
