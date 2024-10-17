import myTitle from "./title.js";
import carousel from "./carousel.js";
import carouselRight from "./carouselRight.js"

export default {
    data(){
        return{
            titleUrl:'ife.baidu.com',
            titleDate:'2016.03',
            carouselImgSrc:'../../images/鱿鱼丝.png'
        }
    },
    components:{
        myTitle, carousel, carouselRight
    },
    template:`
        <my-title :url="titleUrl" :date="2016.03"></my-title>
        <div id="context1">   
            <carousel :imgSrc="carouselImgSrc"></carousel>
            <carousel-right></carousel-right>
        </div>
        <div id="context2">
            <div class="context2Context1">
                <div class="context2Context1Content1">What</div>
                <div class="context2Context1Content2">   
                    端前端前端端前端前端前端前端前端前端前 端前端前端前端前端前端前端前端端前端前 端端前端前端前端前端前端前端前端前端前 端前端前端前端前端前端端前端前端端前端 前端前端前端前端前端前端前端前端前端前
                </div>
            </div>
            <div class="context2Context2">
                <div class="context2Context2Content1">When</div>
                <div class="context2Context2Content2">   
                    端前端前端端前端前端前端前端前端前 端前端前端前端前端前端前端前端前端 端前端前端端前端前端前端前端前端前 端前端前端前端前端前端前端前端前端 端前端前端端前端前端前端前端前端前 端前端前端前端前端                </div>
            </div>
            <div class="context2Context3">
                <div class="context2Context3Content1">How</div>
                <div class="context2Context3Content2">   
                    前端前端端前端前端 前端前端前端前端前端前 端前端前端端前
                </div> 
                <div class="context2Context3Content3">   
                    What-------- 40%
                    What-------- 30%
                    What-------- 30%
                </div>  
            </div>
        </div>
        <div id="context3"> 
            <div class="context3Context1">     
                <div class="context3Context1Content1">
                    THE TECHNOLOGE OF FRONT
                </div>
                <div class="context3Context1Content2">   
                    前端技术领域
                </div>
                <hr>
                <div class="context3Context1Content3">   
                    前端前端前端前端前端前端前端前端前端前端前端前端前端前端前前端前端前端前端前端前端前端前端前端前端前端前端前端前端端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端<img src="../../images/鱿鱼丝.png" />前端端前端前端端前端前端前端前端前端前端前端前端前端前端前端前端前端前端端前端前端端前端前端前端前端前端前端前端前端前端前端前端前端前端前端端前端前端端前端前端前端前端前端前端前端前端前端前端前端前端前端前端端前端前端端前端前端前端前端前端前。端前端前端端前端前端前端前端前端前端前端前端前端前端前端前端前端端前端前端端前端前端前端前端前端前端前端前端前端前端前端前端前端前端端前端前端端前端前端前端前端前端前端前端前端前端前端前端前端前端前端端前端前端端前端前端前端前端前端前端前端前端前端前端前端前端前端前端端前端前端端前端前端前端前端前端前前端前端前端前端前前端前端前端前端前端前端前端前端前端前端前端前端前端前端端前端前端端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端端前端前端前端前端前端前端前端前端前端前端前端端前端前端前端前端前端                         
                </div>                    
            </div>
            <div class="context3Context2">   
                <div class="context3Context2Context1">   
                    <div class="context3Context2Context1Context1">   
                        前端技术
                    </div>
                </div>
                <div class="context3Context2Context2">   
                    <div class="context3Context2Context2Context1"> 
                        <ul>    
                            <li>前端前端前端前端前端前端..............................前端</li>
                            <li>前端前端前端前端前端前端..............................前端</li>
                            <li>前端前端前端前端前端前端..............................前端</li>
                        </ul>                          
                    </div>
                    <div class="context3Context2Context2Context2">   
                        <hr>
                        ONE TWO THREE
                    </div>                
                </div>
            </div>
        </div>                             
    `
}