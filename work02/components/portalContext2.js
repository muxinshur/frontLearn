export default {
    name:'portalContext2',
    data(){
        return{
            title:'课程安排',
            sections:[
                { id:1, name:'第一课  自律独立思考',picUrl:'../../images/原味鱿鱼丝.png', content:'XXXXXX'},
                { id:2, name:'第二课  实践',picUrl:'../../images/炭烧味鱿鱼丝.png', content:'XXXXXX'},
                { id:3, name:'第三课  总结回顾',picUrl:'../../images/辣味鱿鱼丝.png', content:'XXXXXX'},
                { id:4, name:'第四课  分享交流',picUrl:'../../images/鱿鱼丝.png', content:'XXXXXX'},
            ]
        }
    },
    template:`
        <div class="context makeSelfToCenter">
            <h1>{{ title }}</h1>  
            <div>
                <div class="context2Content" v-for="section in sections">
                    <img class="context2Img" :src="section.picUrl"  :alt="section.content"/>
                    <h3>{{ section.name }}</h3>
                    <p>{{ section.content }}</p>
                </div> 
            </div>   
        </div>
    `
}