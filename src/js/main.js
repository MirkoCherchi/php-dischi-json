const { createApp } = Vue;

createApp({
  data() {
    return {
      discs: [],
    };
  },
  methods: {
    getDiscs() {
      axios.get("server.php").then((response) => {
        this.discs = response.data;
      });
    },
  },
  created() {
    this.getDiscs();
  },
}).mount("#app");
