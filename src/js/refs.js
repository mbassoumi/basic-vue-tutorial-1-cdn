new Vue({
    el: '#refs-dev',
    data: {
        output: 'Your fav food',
    },
    methods:{
        readRefs: function (e) {
            e.preventDefault();
            this.output = this.$refs.input.value;
            console.log(this.$refs.test.innerHTML);
        }
    },
    computed:{

    }
});