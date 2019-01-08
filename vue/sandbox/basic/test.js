Vue.component('hello-component',{
    template: '<p>Hello</p>'
});


var app = new Vue({
    el: '#app',
    data:{
        message:'Hello Vue.js!',
        toggle: false,
        colors:['Red','Green','Blue'],
        user:{
            firstName:'Taro',
            lastName:'Yamada',
            age:28
        }, 
        now: ''
    },
    methods: {
        onclick: function () {
            this.now = new Date().toLocaleString();
            console.log(this.now);
        }
    }
});