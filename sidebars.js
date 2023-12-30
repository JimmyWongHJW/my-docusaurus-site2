module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '【多多有货】网站服务',
      link: {
        type: 'generated-index',
		  title: '网站服务指南',
        keywords: ['tutorial-basics'],
      },
      items: [
	    {
          type: 'category',
          label: '网站常用操作说明',
          link: {
            type: 'generated-index',
		    title: '网站操作指引',
            description:
              "首次下单必看",
            keywords: ['mall-intro'],
          },
		  items: [
            {
              type: 'category',
              label: '购买下单',
              link: {
              type: 'doc',
              id: 'tutorial-basics/mall-intro/purchase-order',
              },
		    {
              type: 'category',
              label: '查询订单',
              link: {
              type: 'doc',
              id: 'tutorial-basics/mall-intro/order-search',
              },
	        {
              type: 'category',
		      label: '售后服务',
              link: {
              type: 'doc',
              id: 'tutorial-basics/mall-intro/order-search',
              },
		  ],
		},
        {
          type: 'category',
          label: '常见问题',
          link: {
            type: 'doc',
		    id: 'tutorial-basics/mall-help/intro',
        },
    {
      type: 'category',
      label: '🍎Apple ID',
      link: {
        type: 'generated-index',
		  title: '🍎Apple ID 商品说明',
        keywords: ['tutorial-appleid'],
      },
	  items: [
        'tutorial-appleid/appleid',
        'tutorial-appleid/tutorial',
        'tutorial-appleid/question',
      ],
	},  
  ],
};	     
