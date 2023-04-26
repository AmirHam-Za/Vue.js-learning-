



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
            
                firstName:"",
                lastName:"",
                fullName:"" //watcher er khettre ei property ta define korte hobe 
            }
            // Data property object hole jevabe watch korte hobe
            
    
    },
   
    computed:{
        // fullName(){
        //     return this.firstName + " " + this.lastName
        // }
    },
    // khane computed property diye korechi, ek e vabe amra method & watch property diye o korte pari

    methods:{
        // fullName(){
        //     return this.firstName + " " + this.lastName
        // }
    },

    watch:{
        firstName(newValue){
            this.fullName = newValue + " " + this.lastName
        },
        lastName(newValue){
            this.fullName = this.firstName  + " " + newValue
        },
    }

    // kothay konti use hobe
    // jehetu amra 2 ta property use korechi sei jonno 2 ta watcher dite hobe

    // ekhane 3 ta props e ek e kaaj korche, tobe computed  property ta sobtheke better, ete fast execution paoa jay, karon computed property te method execution ta bar bar bar hoy na.


    // data property er bivinno property niye calculation kore jkhn amader notun property dekhanor dorkar hoy view er moddhe, tkhn amra computed property use korbo

    //kono event bind er khetttre, argument passing er khettre method use hoy

    // change detection, data property change hole kono kichu korte chai erokom case a watcher use korbo, sadharon to validation er khettre watcher use hoy
});
app.mount("#app") 

