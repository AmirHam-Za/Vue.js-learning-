var app = Vue.createApp({
    // data:function(){}
    data(){
        return{
            count:0
        }
        },
    
    methods: {
        // getCurrentTime(){
        //     let Ct = new Date();
        //     return new Date();
        // },
        // increase(amount){
        //     this.count=this.count + amount
        increase(event, amount){
            this.count=this.count + amount
            // console.log(event)
        },
        decrease(amount){
            this.count=this.count - amount
        },
        test(ev){
            console.log('test')
            console.log(ev)
        },
    }, 
});
app.mount("#app")