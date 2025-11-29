import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: '部落格文章',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '標題',
      type: 'string',
      validation: (Rule) => Rule.required().error('標題為必填欄位'),
    }),
    defineField({
      name: 'slug',
      title: '網址代稱',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('網址代稱為必填欄位'),
    }),
    defineField({
      name: 'excerpt',
      title: '摘要',
      type: 'text',
      rows: 3,
      description: '文章的簡短描述',
    }),
    defineField({
      name: 'image',
      title: '封面圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '替代文字',
        },
      ],
    }),
    defineField({
      name: 'category',
      title: '分類',
      type: 'string',
      options: {
        list: [
          {title: '冒險', value: '冒險'},
          {title: '美食', value: '美食'},
          {title: '文化', value: '文化'},
          {title: '自然', value: '自然'},
          {title: '城市', value: '城市'},
        ],
      },
    }),
    defineField({
      name: 'date',
      title: '發布日期',
      type: 'date',
      options: {
        dateFormat: 'YYYY年MM月DD日',
      },
    }),
    defineField({
      name: 'readTime',
      title: '閱讀時間',
      type: 'string',
      description: '例如：閱讀時間 8 分鐘',
    }),
    defineField({
      name: 'rating',
      title: '評分',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(5).precision(1),
      description: '0-5 分，可使用小數點',
    }),
    defineField({
      name: 'author',
      title: '作者',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'content',
      title: '文章內容',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: '一般', value: 'normal'},
            {title: '標題 1', value: 'h1'},
            {title: '標題 2', value: 'h2'},
            {title: '標題 3', value: 'h3'},
            {title: '標題 4', value: 'h4'},
            {title: '引用', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: '粗體', value: 'strong'},
              {title: '斜體', value: 'em'},
              {title: '底線', value: 'underline'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: '連結',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: '替代文字',
            },
            {
              name: 'caption',
              type: 'string',
              title: '圖片說明',
            },
          ],
        },
        {
          type: 'object',
          name: 'videoEmbed',
          title: '影片',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: '影片網址',
              description: '支援 Cloudinary、YouTube 等影片連結',
            },
            {
              name: 'caption',
              type: 'string',
              title: '影片說明',
            },
          ],
          preview: {
            select: {
              url: 'url',
              caption: 'caption',
            },
            prepare({url, caption}) {
              return {
                title: caption || '影片',
                subtitle: url,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `作者：${author}`}
    },
  },
})
