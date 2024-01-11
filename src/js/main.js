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
        this.discs = response.data.map((disc) => ({
          ...disc,
          isRotated: false,
        }));
      });
    },
    toggleCardRotation(selectedDisc) {
      this.discs.forEach((disc) => {
        if (disc !== selectedDisc) {
          disc.isRotated = false;
        }
      });
      selectedDisc.isRotated = !selectedDisc.isRotated;
    },
  },
  created() {
    this.getDiscs();
  },
}).mount("#app");
