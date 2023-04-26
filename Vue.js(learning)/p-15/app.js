



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
            review:"",
            show:false,
            // skills:["HTML","CSS","JS"]
            skills:[
                {name:"HTML", experience:5},
                {name:"CSS", experience:3},
                {name:"JS", experience:4},
                {name:"java", experience:2},
                {name:"php", experience:10},
                {name:"nodejs", experience:15},
                {name:"pythpn", experience:3},
                {name:"go", experience:1}
            ],
            newSkill:{ name:"", experience:0}
        }
    },
    computed:{
        totalCount1(){
            console.log("count from computed property")
            return this.skills.length
        },
        experiencedSkills() {
            let es = this.skills.filter((item) => {
                return item.experience >= 10
            })
            return es
            // ekhettre "experiencedSkills()"method er moddhe  shudhu mattro 10 er upurer skill gulo array akare pabo, ei aray ti html er moddhe loop er mddhome show krbo
        }
    },
    methods: {
        addSkill(){
            this.skills.push(this.newSkill)
            this.newSkill = {} //this make =s the input field empty
        },
        removeSkill(i){
            this.skills.splice(i, 1)
        },

        totalCount(){
            console.log('count from method')
           return this.skills.length
        }
        //totalCount()function ti k html er moddhe show korle sekhane total count dekhabe
        // review properti er  field a kichu likhle seti "totalCount()" method theeke call hocche, jeta oproyojonio, eto property ekti method theke call hole app er performance kome jete pare, eti solve korar jonno vue js mojar ekti "computed property" property provide kore

        // computed propertir mddhe jotogulo method declare korbo sei method gulo amra ekti data propertir moto kore pabo & ei data property keHTML er moddhe data propertir moto use korte parbo, ekhettre kono perameter ba argument pass kora hoyna.

        // agerbar dekhechilam, jkhn kono method call kori ba html er moddhe use kori tahole je kono property change korlesei method ta e bar bar execute hoy. computed property use korle seti hoyna, jemon totalCount() method er khettre review field a kichu input korlei seti totalCount() method theke call hoto, kintu computed Property er kettre eti call hoyna.

        // orthat, coputed propertir moddhe data Propertir j j variable ba property use korbo shudhumattro sei sei variable er value gulo change holei computed property ta execute hobe. but (method:{}) use korle j kono property change er jonno execute hobe, so, computed propertyy app er performance enhance/fast kore .

        // computed property diye evabe amra onek kaaj korte pari, jemon ekhn amra computed property use kore skill wise experience dekhabo.sei jonno computed property er moddhe experiencedSkill()name ekti method nibo.
    }
});
app.mount("#app") 