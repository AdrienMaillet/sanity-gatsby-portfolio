export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eafe6828aa2b7059b91fa9f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jwc63tst',
                  apiId: 'd9f64fb5-96e7-4cdd-bb7a-c90c83c0baa7'
                },
                {
                  buildHookId: '5eafe6836d3a2d71ade11e05',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tooex9cr',
                  apiId: '18e40621-e476-4a90-b1a2-d0b7236d66cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AdrienMaillet/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tooex9cr.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
