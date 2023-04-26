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
            show: false,
            skills:[
                {name:"HTML", experience:5},
                {name:"CSS", experience:3},
                {name:"JS", experience:4},
                {name:"java", experience:2},
                {name:"php", experience:6},
                {name:"nodejs", experience:5},
                {name:"pythpn", experience:3},
                {name:"go", experience:1}
            ],
        }
    },
    
    methods: {
        toggle(){
            this.show = !this.show
        }
    }
});
app.mount("#app") 