<template>
  <section class="container">
    <div>
      <p>

      </p>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({route, app}) {
  // const user = await app.$axios.$get(`https://qiita.com/api/v2/users/${route.params.id}`)
  const items = await app.$axios.$get(`https://qiita.com/api/v2/items?query=user:${route.params.id}`)
  return {
     // user:user,
    items:items
  }
  }
}

</script>
