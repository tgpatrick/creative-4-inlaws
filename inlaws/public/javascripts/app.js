/*global axios */
/*global Vue */
import router from '../../src/router'
var app = new Vue({
  router,
  el: '#app',
  data: {
    test: "This is the edit test!",
    newInlawName: "",
    newInlawRelation: "",
    newInlawBirthday: "",
    newInlawHobbies: "",
    newInlawNotes: "",
    warning: false,
    inlaws: [{
        name: 'Inlaw 1',
        relation: 'Wife\'s brother',
        birthday: 'Jan 1, 1990',
        hobbies: 'Dancing, Trains',
        notes: 'A little insane.'
      },
      {
        name: 'Inlaw 2',
        relation: 'Wife\'s sister',
        birthday: 'Jan 2, 1990',
        hobbies: 'Dancing, Trains',
        notes: 'Kinda insane.'
      },
      {
        name: 'Inlaw 3',
        relation: 'Wife\'s mother',
        birthday: 'Jan 3, 1990',
        hobbies: 'Dancing, Trains',
        notes: 'Insane.'
      },
      {
        name: 'Inlaw 4',
        relation: 'Wife\'s father',
        birthday: 'Jan 4, 1990',
        hobbies: 'Dancing, Trains',
        notes: 'Pretty insane.'
      },
      {
        name: 'Inlaw 5',
        relation: 'Wife\'s uncle',
        birthday: 'Jan 5, 1990',
        hobbies: 'Dancing, Trains',
        notes: 'Absolutely insane.'
      }
    ],
  },
  created: function() {
    this.getall();
  },
  methods: {
    async getall() {
      var url = "/api/inlaws";
      try {
        let response = await axios.get(url);
        this.inlaws = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    addInlaw() {
      if (this.newInlawName.length > 0) {
        var url = "/api/inlaws";
        axios.post(url, {
            name: this.newInlawName,
            relation: this.newInlawRelation,
            birthday: this.newInlawBirthday,
            hobbies: this.newInlawHobbies,
            notes: this.newInlawNotes
          })
          .then(response => {
            this.inlaws.push(response.data);
          })
          .catch(error => {
            console.log(error);
          })
        this.warning = false;
      } else {
        this.warning = true;
      }

      this.newInlawName = '';
      this.newInlawRelation = '';
      this.newInlawBirthday = '';
      this.newInlawHobbies = '';
      this.newInlawNotes = '';
    },
    deleteInlaw(inlaw) {
      const index = this.inlaws.indexOf(inlaw);
      if (index > -1) {
        this.inlaws.splice(index, 1);
      }
    }
  }
});