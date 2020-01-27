<template>
  <div class="container">
    <div>
      <div class="container">
        <div class="columns is-centered is-vcentered is-multiline is-3">
          <div class="column is-full has-text-centered">
            <logo />
            <h1 class="title">
              firebase-crud
            </h1>
            <h2 class="subtitle">
              My finest Nuxt.js project
            </h2>
          </div>
          <div class="column is-half" v-for="(item, i) in items" :key="i">
            <div class="card">
              <div class="card-content">
                <div class="media ">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        src="https://picsum.photos/96"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{ item.name }}</p>
                    <p class="subtitle is-6 is-paddingless">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { db } from '~/plugins/firebase'

export default {
  components: {
    Logo
  },
  data() {
    return {
      items: []
    }
  },
  firestore: {
    items: db.collection('items')
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
