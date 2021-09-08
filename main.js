Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        time: 0,
        counterImages: 0,
        images: [
            "img/image1.jpg",
            "img/image2.jpg",
            "img/image3.jpg",
            "img/image4.jpg"
        ]
    },
    methods: {
        prevImage(){
            this.counterImages -= 1;
            if(this.counterImages < 0) this.counterImages = (this.images.length -1);
        },
        nextImage(){
            this.counterImages += 1;
            if(this.counterImages == this.images.length) this.counterImages = 0;
        },
        switchImages(){
            this.time = setInterval(this.nextImage, 3000);
        }
    },
    created(){
        this.switchImages();
    }
})