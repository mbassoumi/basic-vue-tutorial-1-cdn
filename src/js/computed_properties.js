new Vue({
    el: '#computed-properties-dev',
    data: {
        age: 20,
        a: 0,
        b: 0

    },
    methods:{
        // addToA: function (e) {
        //     return this.age + this.a;
        // },
        // addToB: function (e) {
        //     return this.age + this.b;
        // }

    },
    computed:{
        addToA: function (e) {
            return this.age + this.a;
        },
        addToB: function (e) {
            return this.age + this.b;
        }
    }
});