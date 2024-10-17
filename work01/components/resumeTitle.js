export default {
    name: 'ResumeHeader',
    data() {
        return {
            sections: [
                { id: 1, title: '基本信息', hrefId: '#title1' },
                { id: 2, title: '工作经历', hrefId: '#title2' },
                { id: 3, title: '教育经历', hrefId: '#title3' },
                { id: 4, title: '语言技能', hrefId: '#title4' },
                { id: 5, title: '奖项&证书', hrefId: '#title5' }
            ]
        };
    },
    template: `
        <div class="backgroundColorGray">
            <div class="header makeSelfToCenter makeSonToCenter">
                <div class="title" v-for="section in sections" :key="'title'+ section.id">
                    <a class="a-link makeSelfToCenter" :href="section.hrefId">{{ section.title }}</a>
                </div>           
            </div>
        </div>
    `
};