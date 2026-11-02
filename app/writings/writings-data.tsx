export interface BlogPost {
  title: string;
  /** External URL of the article (currently published on Medium). */
  url: string;
  date: string;
  year: string;
}

// Placeholder list pulled from https://tusharravindran.github.io/ (Medium articles).
// Exact publish days aren't listed there, so dates use the 1st of the month.
// To host a post on this site instead, add app/writings/<slug>/page.mdx and
// point `url` at "/writings/<slug>".
export const blogPosts: BlogPost[] = [
  {
    title: "How to not run migration on your production Rails App",
    url: "https://iamtusharxo.medium.com/how-to-not-run-migration-on-your-production-rails-app",
    date: "2025-01-01",
    year: "2025",
  },
  {
    title: "Add Powerful Search to Your App with Elasticsearch",
    url: "https://iamtusharxo.medium.com/add-powerful-search-to-your-app-with-elasticsearch",
    date: "2025-01-01",
    year: "2025",
  },
  {
    title: "Concurrency in Golang: Writing Scalable Code Without Overengineering",
    url: "https://iamtusharxo.medium.com/concurrency-in-golang-writing-scalable-code-without-overengineering",
    date: "2025-01-01",
    year: "2025",
  },
  {
    title: "Modern CSS Tricks for Responsive Web Design",
    url: "https://iamtusharxo.medium.com/modern-css-tricks-for-a-responsive-web-design",
    date: "2025-03-01",
    year: "2025",
  },
  {
    title: "Understanding React useState and Common Mistakes",
    url: "https://iamtusharxo.medium.com/understanding-react-usestate-and-common-mistakes",
    date: "2024-05-01",
    year: "2024",
  },
  {
    title: "Bash Text Manipulation: Essential Techniques and Tips",
    url: "https://iamtusharxo.medium.com/bash-text-manipulation-essential-techniques-and-tips",
    date: "2024-04-01",
    year: "2024",
  },
  {
    title: "Integrating Power BI with Ruby on Rails 7",
    url: "https://iamtusharxo.medium.com/integrating-power-bi-with-ruby-on-rails-7",
    date: "2024-03-01",
    year: "2024",
  },
  {
    title: "ActiveRecord Querying in Rails: A Comprehensive Guide",
    url: "https://iamtusharxo.medium.com/activerecord-querying-in-rails-a-comprehensive-guide",
    date: "2024-02-01",
    year: "2024",
  },
  {
    title: "Understanding Rails Active Model Associations",
    url: "https://iamtusharxo.medium.com/understanding-rails-active-model-associations",
    date: "2024-02-01",
    year: "2024",
  },
  {
    title: "Environment Variable Management: Efficient Use of Dotenv in Node.js",
    url: "https://iamtusharxo.medium.com/environment-variable-management-a-guide-to-efficient-use-of-dotenv-in-node-js",
    date: "2024-01-01",
    year: "2024",
  },
];
