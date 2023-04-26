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
            skills:[
                {name:"HTML", experience:5},
                {name:"CSS", experience:3},
                {name:"JS", experience:4}
            ],
            newSkill:{ name:"", experience:0}
        }
    },
    
    methods: {
        addSkill(){
            this.skills.push(this.newSkill)
            this.newSkill = {} //this make =s the input field empty
        },
        removeSkill(i){
            this.skills.splice(i, 1)
        }
    }
});
app.mount("#app") 