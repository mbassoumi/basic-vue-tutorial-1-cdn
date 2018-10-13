new Vue({
    el: '#dynamic-css-dev',
    data: {
        available: false,
        nearby: false,
    },
    methods:{
        revertAvailable: function (e) {
            this.available = !this.available;
        },
        revertNearby: function (e) {
            this.nearby = !this.nearby;
        },

    },
    computed: {
        compClasses: function (e) {
            return {
                available: this.available,
                nearby: this.nearby
            }
        },

    }
});