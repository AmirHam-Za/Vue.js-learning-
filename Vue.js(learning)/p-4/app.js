var app = Vue.createApp({
    // data:function(){}
    data(){  /**Moder js */
        return{
            msg:"welcome to Vue js3",
            tutorialInfo: {
                name:"Vue js3 bangla tutorial",
                link:"https://www.youtube.com/",
                
            },
            htmlLink:'<a href="https://www.youtube.com/">Youtube</a'
        }
    } 
})
app.mount("#app")