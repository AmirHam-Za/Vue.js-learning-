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
            activeClass:"red"
            
        }
        },
    
    methods: {
        setClass(className) {
            this.activeClass = className
        }
    }
});
app.mount("#app")