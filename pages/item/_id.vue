<template>
  <main class="container">
    <h1 class="is-size-1">Item</h1>

    <div class="columns is-multiline is-centered">
      <div class="column is-7" v-if="item">
        <h3 class="is-size-3">Edit</h3>
        <div class="card">
          <div class="card-content">
            <form @submit.prevent="_updateItem">
              <div class="field">
                <label for="name" class="label">Name</label>
                <div class="control">
                  <input
                    name="name"
                    required
                    v-model="item.name"
                    placeholder="New value for the name field"
                    type="text"
                    class="input"
                  />
                </div>
              </div>
              <div class="field">
                <label for="description" class="label">Description</label>
                <div class="control">
                  <input
                    type="text"
                    name="description"
                    v-model="item.description"
                    required
                    placeholder="New value for the description field"
                    class="input"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button type="submit" class="button is-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <hr />

        <h3 class="is-size-3">Delete</h3>
        <div class="has-text-centered">
          <button class="button is-light is-large" @click="_deleteItem">
            <img
              src="https://img.icons8.com/flat_round/64/000000/delete-sign.png"
              width="32"
            />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { db } from '~/plugins/firebase'

export default {
  data() {
    return {
      item: null,
      newItem: {}
    }
  },
  mounted() {
    let ref = db.collection('items').doc(this.id)

    ref.get().then(doc => {
      if (doc.exists) {
        this.item = doc.data()
      } else {
        alert('No such document!')
      }
    })
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  methods: {
    _updateItem() {
      let ref = db.collection('items').doc(this.id)

      ref
        .set(this.item)
        .then(docRef => {
          alert('success')
        })
        .catch(err => alert('error'))
    },
    _deleteItem() {
      let ref = db.collection('items').doc(this.id)
      const isConfirmed = confirm('are you sure?')

      if (isConfirmed) {
        ref.delete().then(() => {
          alert('deleted')

          this.$router.push('/')
        })
      } else {
        alert('ok boomer')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
