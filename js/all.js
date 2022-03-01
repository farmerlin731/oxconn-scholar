import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';


const app = createApp({
    data(){
        return{
            tmpData:'hi vue 0301',
        }
    },
    methods:{
        testFunc(){
            alert(this.tmpData);
        },
    },
    mounted(){
        // this.testFunc();
        AOS.init();
    },
});


app.mount('#app');