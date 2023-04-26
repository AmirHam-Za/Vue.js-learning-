var app = Vue.createApp({
    // data:function(){}
    data(){
        return{
            count:0
        }
        },
    
    methods: {
        getCurrentTime(){
            let Ct = new Date();
            return new Date();
        },
        increase(){
            this.count=this.count +1
        },
        decrease(){
            this.count--
        },
    }, 
});
app.mount("#app")