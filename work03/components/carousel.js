export default {
    props:{
        imgSrc: String
    },

    template:`
        <div class="carouselContainer">
            <div class="carouselGreenMask"></div>
            <img :src="imgSrc" alt="图片"/>
            <div class="carouselRedMask"></div>
        </div>
    `
}