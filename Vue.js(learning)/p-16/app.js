



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
            mobile: "",
            name:{
                firstName:"",
                lastname:""
            }
            // Data property object hole jevabe watch korte hobe
            
        }
    },
   
    watch: {
        mobile(newValue, oldValue){
            // ekhane mobile property kwatch kora hobe
            console.log(newValue)
            if(isNaN(newValue)) {
                alert("Enter Valid Mobile Number")
                // alert execution stop kore dey
                this.mobile=oldValue
                // old value er karone alert er pore shudhu ager value tai dekhabe
            }
            // another validation
            if(newValue.length == 11) {
                alert("An OTP has been sent")
            }
        },
        
        // "name.firstName":function(newValue, oldValue) {
        //     console.log(newValue, oldValue)
        // },
        // ekhettre object er nested property k watch kora hocche
        // ekhane shudhu mattro name er firstName object ti ke watch kora hyeche,ekhettre shudhu firstName er input field ta kaaj korbe, last name er ta kaj korbe na, se jonno alada function likhte hobe, tar mane holo, amra evabe object er specific prop k watch  korte pari.

        // tahole puro object ti k kivabe watch kora jabe? eti ekhn dekhbo--

        name: {
            deep: true,
            handler: function (newValue, oldValue) {
                // console.log(newValue, oldValue)
                console.log(newValue)
            }
        }
        // ek e vabe amra array and computed property k o watch korte pari

    }
});
app.mount("#app") 

// watcher e maddhome data prop er moddhe kono prop er change ta detect korte pari, orthat, chaile kono prop change hole specific method execute korte pari.