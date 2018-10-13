new Vue({
    el: '#bag-game-dev',
    data: {
        health: 100,
        ended: false,
    },
    methods:{
        punch: function (e) {
            this.health -=10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function (e) {
            this.health = 100;
            this.ended = false;
        },
    },
    computed:{

    }
});