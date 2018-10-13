new Vue({
    el: '#vue-app',
    data: {
        name: 'Majd',
        job: 'Full stack developer',
        website: "https://www.facebook.com/",
        websiteTag: '<a href=""> The fucken facebook website</a>'
    },
    methods: {
        greet: function (time) {
            return "Good "+ time + ' ' + this.name
        }
    }
});
