export default {
    name:'portalContext1',
    data(){
        return{
            title:'我们的宗旨',
            sections:[
                { id:1, content:'自律独立思考',picUrl:'../../images/原味鱿鱼丝.png'},
                { id:2, content:'实践',picUrl:'../../images/炭烧味鱿鱼丝.png'},
                { id:3, content:'总结回顾',picUrl:'../../images/辣味鱿鱼丝.png'},
                { id:4, content:'分享交流',picUrl:'../../images/鱿鱼丝.png'},
            ]
        }
    },
    template:`
        <div class="context makeSelfToCenter">
            <h1>{{ title }}</h1>  
            <div class="makeSonToCenter">
                <div class="" v-for="section in sections">
                    <h3>{{ section.content }}</h3>
                    <img class="context1Img" :src="section.picUrl"  :alt="section.content"/>
                </div> 
            </div>   
        </div>
    `
}