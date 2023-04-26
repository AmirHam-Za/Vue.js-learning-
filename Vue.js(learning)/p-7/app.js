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
            name:"",
        };
        },
    
    methods: {
        handleKeyup(e)
        {
            // console.log(e)
            // console.log(e.target.value)
            this.name = e.target.value;
        },
        // handleFormSubmit(e){
        //     console.log(e)
        //     e.preventDefault();
        //     // eti  data submit nd destroy hote badha dey
        //     // <input type="text" @keyup="handleKeyup">--ei input er khetttre ei functionality lage, kintu key up er shathe .prevent add kore dile  shudhu handleFormSubmit(e){} eituku likhe dilei kaaj hoy.
            

        // }
        handleFormSubmit(){
            console.log('form submitted')
            
            

        },
        handleCardClick(e){
            console.log(e)
            console.log('card clicked')

        },
        handleViweClick(e){
            console.log(e)
            // e.stopPropagation()

            // shudhu viwe event ta e kaaaj korbe. eti javaScript er norml=l way, etike event modifire diye kora jy. se jonno button er moddhe @click.stop likhe dte hobe, tahole parent er upor event ti kaaj korben , shudu mattro child er upor kaaj korbe. 
            console.log('view clicked')
        }
    }
});
app.mount("#app")