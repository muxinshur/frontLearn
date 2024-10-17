export default {
    name: 'Resume',
    data() {
        return {
            sections: [
                {
                    id: 1,
                    title: '基本信息',
                    imgUrl: '../../images/鱿鱼丝.png',
                    content: ['全栈开发', 'XXXXXXXXXXXXXXXXX'
                    ]
                },
                {
                    id: 2,
                    title: '工作经历',
                    content: ['2014-2015', 'XXXXXX', '全栈开发'
                    ]
                },
                {
                    id: 3,
                    title: '教育经历',
                    content: ['2008-2012', 'XXXXXXX'
                    ]
                },
                {
                    id: 4,
                    title: '语言技能',
                    content: ['前端','HTML, CSS, JavaScript'
                    ]
                },
                {
                    id: 5,
                    title: '奖项&证书',
                    content: ['2012年1月', '一等奖学金'
                    ]
                }
            ]
        };
    },

    methods:{
        getBackgroundColorByIndex(index){
            return this.sections[index].id % 2 === 0 ? 'backgroundColorGray' : 'backgroundColorWhite';
        },
        getFontColorByIndex(index){
            return this.sections[index].id % 2 !== 0 ? 'fontColorGray' : '';
        }
    },

    template: `
        <div v-for="(section, index) in sections" :key="section.id" class="makeSonToCenter" :class="getBackgroundColorByIndex(index)">
            <div class="context">
                <h1 :id="'title'+ section.id">{{ section.title }}</h1>                   
                <div class="content" v-if="section.id == 1"> 
                    <img :src="section.imgUrl" alt="头像"/>
                    <p v-for="(item, index) in section.content" :class="getFontColorByIndex(index)">{{ item }}</p>
                </div>
                    
                <div class="content" v-else>
                    <p v-for="(item, index) in section.content" :class="getFontColorByIndex(index)">{{ item }}</p>
                </div>                   
            </div>
        </div>
    `
};