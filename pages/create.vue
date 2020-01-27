<template>
  <main class="container">
    <div class="columns is-centered is-multiline">
      <div class="column is-full">
        <h1 class="is-size-1">Add a new item</h1>
      </div>
      <div class="column is-7">
        <div class="card">
          <div class="card-content">
            <form @submit.prevent="_addItem">
              <div class="field">
                <label for="name" class="label">Name</label>
                <div class="control">
                  <input
                    type="text"
                    name="name"
                    class="input"
                    required
                    v-model="newItem.name"
                    placeholder="Item's name"
                  />
                </div>
              </div>
              <div class="field">
                <label for="Description" class="label">Description</label>
                <div class="control">
                  <input
                    name="description"
                    type="text"
                    class="input"
                    required
                    v-model="newItem.description"
                    placeholder="Item's description"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
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
      newItem: {}
    }
  },
  methods: {
    async _addItem() {
      await db
        .collection('items')
        .doc(
          `nuxt-crud-${Math.random()
            .toString(16)
            .slice(2)}`
        )
        .set({
          name: this.newItem.name,
          description: this.newItem.description
        })

      this.newItem.name = ''
      this.newItem.description = ''
      alert('success')
    }
  }
}
</script>

<style scoped></style>
