<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "HomeView",
  components: {},
  created() {
    axios({
      url: "/dev-api/",
      method: "GET",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      }),
      axios({
        url: [process.env.VUE_APP_BASE_API1]+"/",
        method: "GET",
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
  },
};
</script>
