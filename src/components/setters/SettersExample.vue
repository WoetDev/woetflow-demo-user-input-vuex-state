<template>
  <div>
    <t-card
      header="This input uses v-model with computed setters to manage its state in the Vuex store"
    >
      <t-input-group>
        <t-input name="example" v-model="example" />
      </t-input-group>
      <PrintStateSetters />
    </t-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PrintStateSetters from "@/components/setters/PrintStateSetters";

export default {
  name: "SettersExample",
  components: {
    PrintStateSetters
  },
  computed: {
    ...mapState(["values"]),
    example: {
      set(example) {
        this.$store.commit("setValues", { example });
      },
      get() {
        // Or remove mapState and use this.$store.state.values.example
        return this.values.example;
      }
    }
  }
};
</script>
