// var app = Vue.createApp({
//     // data:function(){}
//     data(){
//         return{}
//         },
    
//     methods: {}
// });
// app.mount("#app")


var app = Vue.createApp({
    // data:function(){}
    data() {
        return {
            num:"",
            result:"",
        };
        },
    
    methods: {
        // handleInput(e)
        // {
        //     console.log(e)
        //     // this.name = e.target.value;
        //     this.num = e.target.value;
        // },
        //// manual 2 way data binding


        getDouble(e){
            this.result = this.num *2
        },
        getSquare(e){
            this.result = this.num * this.num
        },
        reset(e){
            this.result ='',
            this.num =''
        },
        addTen(e){
            this.result = this.num + 10
        }
        





        
       
        
    }
});
app.mount("#app")