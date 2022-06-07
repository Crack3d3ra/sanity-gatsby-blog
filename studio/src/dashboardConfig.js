export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "629f11c1c4f4254b3eec3852",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-pwqhsqx4",
                  apiId: "3d6b7433-c7c0-4e1d-8d80-6947719fdb29",
                },
                {
                  buildHookId: "629f11c1fcb0b54d0acee9e3",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xvyuiogx",
                  apiId: "defbab9c-ca56-4719-b5db-36e74630916d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Crack3d3ra/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xvyuiogx.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
