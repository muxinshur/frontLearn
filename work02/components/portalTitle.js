export default {
    name: 'portalTitle',
    data() {
        return {
            sections: [
                { id: 1, title: '智能小程序'},
                { id: 2, title: '开发文档'},
                { id: 3, title: '交流中心'},
                { id: 4, title: '服务市场'},
                { id: 5, title: '开源联盟'},
                { id: 6, title: '管理中心'}
            ]
        };
    },

    template: `
        <div class="container">
            <div class="header">
                <div class="makeSonToCenter">
                    <div class="makeSonToCenter" v-for="section in sections" style="align-items: center">
                        <div class="title" v-if="section.id == 1">  
                            <a class="a-link" :href="">{{ section.title }}</a>
                        </div>            
                    </div>
                </div>

                <div class="makeSonToCenter">
                    <div class="makeSonToCenter" v-for="section in sections" style="align-items: center">
                        <div class="title makeSelfToCenter" v-if="section.id !=1">  
                            <a class="a-link" :href="" >{{ section.title }}</a>
                        </div>
                    </div>              
                </div>
            </div>
            
            <div class="hero">
                <h1>百度前端训练营2021开营了，赶紧报名吧！</h1>
                <p>欢迎参加我们的培训课程，提升您的前端技能。</p>
            </div>
        </div>
    `
};