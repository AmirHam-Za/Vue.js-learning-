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
            // skills:["HTML","CSS","JS"]
            aboutMe:{
                name:"Amir Hamza",
                nickName:"Hamza",
                webSite:"http://hamjabd.com"
            },
            skills:[
                {name:"HTML", experience:5},
                {name:"CSS", experience:3},
                {name:"JS", experience:4}
            ],
        }
    },
    
    methods: {}
});
app.mount("#app") 