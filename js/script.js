"use strict"

const {createApp} = Vue 

createApp({
    data() {
        return {
            // variabili vue 3
            message: "Hello VUE JS 3 !",
            h1Class: "text-center",
            urlImageGio: "./images/giogiogio.jpeg",
            pictureGio: "Giovanni Lampis' yellow picture",
            bootstrapClasses: "rounded-circle"
        }
    },
    methods: {
        //funzioni vue 3
    }
}).mount('#app')