<template>
    <div><h1>Hello {{ hello }}</h1></div>
</template>
<script>
import gql from "graphql-tag";

export default {
  apollo: {
    hello: gql`
      {
        hello
      }
    `
  }
};
</script>
