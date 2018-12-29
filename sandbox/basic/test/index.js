Vue.component("hello-component", {
    template: '<p>' + app + '</p>'
})

var app = new Vue({
    el: '#app',
    data:{
        message:'Hello World!',
        url:'https://qiita.com/hika7719/items/84c046fbc063f6ff4298',
        languages:['Javascript','Ruby','Python'],
        toggle:true
    },
    methods: {
        onclick: function(){
            this.message = "Clicked";
            console.log(this.message);
        }
    },
})