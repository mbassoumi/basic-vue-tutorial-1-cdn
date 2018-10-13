new Vue({
    el: '#events-dev',
    data: {
        age: 0,
        x: 0,
        y: 0,
        name: '',

    },
    methods:{
        addYear: function (time = 1) {
            this.age+= time;
        },
        subtractYear: function (time = 1) {
            this.age-=time;
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function (e) {
            e.preventDefault();
            alert("You clicked me")
        },
        logName: function (e) {
            this.name
            console.log('you entered ' + event.key);
        },
        logAge: function (event) {
            console.log('you entered ' + event.key);
        },


    }
});