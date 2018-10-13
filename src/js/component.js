Vue.component('greeting', {
    template: '<p>Hi {{name}}. <button @click="changeName">Change Name</button></p>',
    data: function () {
        return {
            name: 'Majd',
        }
    },
    methods: {
        changeName: function () {
            this.name = 'a7aa';
        }
    }
});



var one = new Vue({
    el: '#div-one',
    data: {
        a7a: 'a7aaaaa',
    }

});

var two = new Vue({
    el: '#div-two',

});

