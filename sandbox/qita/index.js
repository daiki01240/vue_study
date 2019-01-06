var app = new Vue({
    el:'#app',
    data:{
        items: null,
        keyword:'',
        message:''
    },
    watch:{
        keyword: function(newKeyword, oldKeyword){
            console.log(newKeyword);
            this.message = 'Waiting for you to stop typing...';
            this.deboucedGetAnswer()
        }
    },
    created:function () {
        // this.keyword = 'JavaScript';
        // this.getAnswer();
        this.deboucedGetAnswer = _.debounce(this.getAnswer, 1000);
    },
    methods:{
        getAnswer:function () {
            if(this.keyword === ''){
                this.items = null;
                this.message = '';
                return;
            }
            this.message = 'Loading...';
            var vm = this;
            var params = { page: 1, per_page: 20, query: this.keyword};
            console.log(params);
            axios.get('https:qiita.com/api/v2/items',{params})
            .then(function(respocne){
                console.log(respocne);
                vm.items = respocne.data;
            })
            .catch(function(error){
                vm.message = 'Error!' + error;
            })
            .finally(function(){
                vm.message =''
            })
            ;
        }
        
    }
});