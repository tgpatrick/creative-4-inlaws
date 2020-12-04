<template>
  <div class="home">
    <ul>
      <li v-for="inlaw in inlaws">
        <h3>{{inlaw.name}}</h3>
        <ul>
          <li>
            <p> <strong>Relation:</strong> {{inlaw.relation}} </p>
          </li>
          <li>
            <p> <strong>Birthday:</strong> {{inlaw.birthday}} </p>
          </li>
          <li>
            <p> <strong>Hobbies:</strong> {{inlaw.hobbies}} </p>
          </li>
          <li>
            <p> <strong>Notes:</strong> {{inlaw.notes}} </p>
          </li>
        </ul>
      </li>
    </ul>
    <form v-on:submit.prevent="addInlaw">
      <p><strong>Name:</strong></p>
      <input type="text" v-model="newInlawName">
      <div class="formSection">
        <p><strong>Relation:</strong></p>
        <input type="text" v-model="newInlawRelation">
        <p><strong>Birthday:</strong></p>
        <input type="text" v-model="newInlawBirthday">
        <p><strong>Hobbies:</strong></p>
        <input type="text" v-model="newInlawHobbies">
        <p><strong>Notes:</strong></p>
        <input type="text" v-model="newInlawNotes">
      </div>
      <button type="submit">Add</button>
    </form>
    <p v-if="warning">You must include a name!</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
