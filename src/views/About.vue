<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- {{getData}} -->
    
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="feed.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      feed: {
        name:"",
        caption:""
      },
    };
  },
  computed: {
    getData() {
      return this.$store.getters["common/test/getData"];
    },
  },
  methods: {
    callGetData() {
      this.$store.dispatch("common/test/getMockData");
    },
    callCreateFeed() {
      let data = {
        name: this.feed.name,
        caption: this.feed.caption,
      };
      this.$store.dispatch("common/test/CreateFeed", data);
    },
  },
  mounted() {
    this.callGetData();
  },
};
</script>
