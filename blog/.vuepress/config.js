module.exports = {
    title: '鱼知鱼博客笔记',
    description: '杂七杂八的博客笔记',
    theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
    base: '/vueblog/',
    themeConfig: {
        /**
         * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
         */
        modifyBlogPluginOptions(blogPluginOptions) {
            return blogPluginOptions
        },
        /**
         * Ref: https://vuepress-theme-blog.ulivz.com/#nav
         */
        nav: [{
                text: '博客',
                link: '/',
            },
            {
                text: '标签',
                link: '/tag/',
            },
        ],
        /**
         * Ref: https://vuepress-theme-blog.ulivz.com/#footer
         */
        footer: {
            contact: [{
                type: 'github',
                link: 'https://github.com/ulivz',
            }, ],
            copyright: [{
                text: 'MIT Licensed | Copyright © 2018-present Vue.js',
                link: '',
            }, ],
        },
    },
}