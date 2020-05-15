export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ebf186868f986ff9601fe39',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9qu8tgxa',
                  apiId: 'ae5b7bfd-000e-4b86-9e79-c0ad8173e7d5'
                },
                {
                  buildHookId: '5ebf186868f98619a901fdc6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fyhhefa4',
                  apiId: 'd3582991-217d-4d62-a316-7e840c77f13a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/victorraby/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fyhhefa4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
