<template>
  <div class="hello">
    <h1>Choose your Sailings</h1>
  <PictureComponent  />
   <CardBodyComponent  />
    <FooterComponent  />
  </div>
</template>

<script>
import PictureComponent from "./PictureComponent";
import CardBodyComponent from "./CardBodyComponent";
import FooterComponent from "./FooterComponent";

export default {

  data () {
    return {
      
    }
  },
   components: {
    PictureComponent,
    CardBodyComponent,
    FooterComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
