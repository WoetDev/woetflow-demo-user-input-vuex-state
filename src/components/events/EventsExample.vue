<template>
  <div>
    <t-card
      header="This input uses the input event and a value binding to manage its state in the Vuex store"
    >
      <t-input-group>
        <t-input
          :value="values.example"
          @input="updateExample"
          id="example"
          name="example"
        />
      </t-input-group>
      <PrintStateEvents />
    </t-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PrintStateEvents from "@/components/events/PrintStateEvents";

export default {
  name: "EventsExample",
  components: {
    PrintStateEvents
  },
  computed: mapState(["values"]),
  methods: {
    updateExample(example) {
      this.$store.commit("setValues", { example: example });
    }
  }
};
</script>
