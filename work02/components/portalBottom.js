export default {
    name:'portalContext1',
    data(){
        return{
            sections:[
                { name:'links', webs:['XXX',"XXX","XXX"]},
                { name:'links', webs:['XXX',"XXX","XXX"]},
                { name:'links', webs:['XXX',"XXX","XXX"]},
            ]
        }
    },
    template:`
        <div class="makeSonLeftRight makeFlex backgroundColorGray">
            <div class= "makeWidthHalf" style="display: flex; justify-content: center" >
                <div class="backgroundColorBlack toRound">s</div>
                <div class="backgroundColorBlack toRound">d</div>
                <div class="backgroundColorBlack toRound">f</div>
            </div>
            <div class="makeSonToCenter makeWidthHalf">
                <div class="context2Content" v-for="section in sections">
                    <h3>{{ section.name }}</h3>
                    <div v-for="webs in section.webs">
                        <a v-for="web in webs">{{ web }}</a>
                    </div>
                </div> 
            </div>   
        </div>
    `
}