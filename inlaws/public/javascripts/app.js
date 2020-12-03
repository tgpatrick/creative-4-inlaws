/*global axios */
/*global Vue */
var app = new Vue({
  el: '#app',
  data: {
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
    test: "Hello, World!",
  },
  created: function() {},
  methods: {}
});