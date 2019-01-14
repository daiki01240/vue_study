<template>
  <!-- <section class="container"> -->
    <div>
      <!-- <h3>Nuxt.js のタグがつけられた投稿の一覧</h3>
       <ul>
        <li v-for="item in items" :key="item.id">
          <h4>
            <span> {{item.title}} </span>
            <small>by</small>
            <nuxt-link to="`/users/${item.user.id`">
              {{item.user.id}}
            </nuxt-link>
          </h4>
          <div> {{item.body.slice(0,130)}}... </div>
          <p><a href="item.url"> {{item.url}} </a></p>
        </li>
       </ul> -->
       <ul>
         <li>
           <nuxt-link to="/login">ログインページヘ</nuxt-link>
         </li>
         <li>
           <nuxt-link to="/authed-route">認証が必要なページへ</nuxt-link>
         </li>
       </ul>
     </div>
  <!-- </section> -->
</template>
