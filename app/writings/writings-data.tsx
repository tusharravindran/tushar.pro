export interface BlogPost {
  title: string;
  /** External URL of the article (currently published on Medium). */
  url: string;
  date: string;
  year: string;
}

// Articles from https://iamtusharxo.medium.com, newest first.
// Dates are the Medium publish dates (IST).
// To host a post on this site instead, add app/writings/<slug>/page.mdx and
// point `url` at "/writings/<slug>".
export const blogPosts: BlogPost[] = [
  {
    title: "How I Built a Go CLI That Tracks My GitHub Streak and Roasts Me When I Miss a Day",
    url: "https://iamtusharxo.medium.com/how-i-built-a-go-cli-that-tracks-my-github-streak-and-roasts-me-when-i-miss-a-day-4053498e6a25",
    date: "2026-07-04",
    year: "2026",
  },
  {
    title: "How to not run migration on your production Rails App",
    url: "https://iamtusharxo.medium.com/i-locked-my-database-and-took-down-production-8a4ab83921cb",
    date: "2026-03-01",
    year: "2026",
  },
  {
    title: "Add Powerful Search to Your App with Elasticsearch",
    url: "https://iamtusharxo.medium.com/add-powerful-search-to-your-app-with-elasticsearch-0056b00dcdf0",
    date: "2026-01-11",
    year: "2026",
  },
  {
    title: "Concurrency in Golang: Writing Scalable Code Without Overengineering",
    url: "https://iamtusharxo.medium.com/concurrency-in-golang-writing-scalable-code-without-overengineering-620d51743f9d",
    date: "2026-01-08",
    year: "2026",
  },
  {
    title: "Modern CSS Tricks for Responsive Web Design",
    url: "https://iamtusharxo.medium.com/modern-css-tricks-for-a-responsive-web-design-without-media-query-for-all-view-ports-and-js-13a095a5155a",
    date: "2025-03-02",
    year: "2025",
  },
  {
    title: "Understanding React useState and Common Mistakes",
    url: "https://iamtusharxo.medium.com/understanding-react-usestate-and-common-mistakes-%EF%B8%8F-06e55a533e47",
    date: "2024-05-21",
    year: "2024",
  },
  {
    title: "Introduction to Redux: Managing State in Modern JavaScript Applications",
    url: "https://iamtusharxo.medium.com/introduction-to-redux-managing-state-in-modern-javascript-applications-37c00e7dd0d7",
    date: "2024-05-15",
    year: "2024",
  },
  {
    title: "Bash Text Manipulation: Essential Techniques and Tips",
    url: "https://iamtusharxo.medium.com/bash-text-manipulation-essential-techniques-and-tips-92b3166911c8",
    date: "2024-04-01",
    year: "2024",
  },
  {
    title: "Streamlining Configuration Management in Node.js: Introducing Native .env File Support",
    url: "https://iamtusharxo.medium.com/streamlining-configuration-management-in-node-js-introducing-native-env-file-support-c13bfa9aaa81",
    date: "2024-03-16",
    year: "2024",
  },
  {
    title: "Integrating Power BI with Ruby on Rails 7",
    url: "https://iamtusharxo.medium.com/integrating-power-bi-with-ruby-on-rails-7-983fdaac1130",
    date: "2024-03-14",
    year: "2024",
  },
  {
    title: "Comprehensive Guide: Installing Node.js using NVM, Angular on Linux",
    url: "https://iamtusharxo.medium.com/comprehensive-guide-installing-node-js-using-nvm-angular-on-linux-ccc1d7555eed",
    date: "2024-03-04",
    year: "2024",
  },
  {
    title: "Unleashing the Power of Bash Scripting: Advanced Text Manipulation and Automation in Linux",
    url: "https://iamtusharxo.medium.com/title-unleashing-the-power-of-bash-scripting-advanced-text-manipulation-and-automation-in-linux-dcbae79b8289",
    date: "2024-03-01",
    year: "2024",
  },
  {
    title: "Understanding Rails Active Model Associations",
    url: "https://iamtusharxo.medium.com/understanding-rails-active-model-associations-and-building-a-comprehensive-application-03384355fd15",
    date: "2024-02-16",
    year: "2024",
  },
  {
    title: "ActiveRecord Querying in Rails: A Comprehensive Guide",
    url: "https://iamtusharxo.medium.com/activerecord-querying-in-rails-a-comprehensive-guide-80928efe4a72",
    date: "2024-02-16",
    year: "2024",
  },
  {
    title: "Environment Variable Management: Efficient Use of Dotenv in Node.js",
    url: "https://iamtusharxo.medium.com/environment-variable-management-a-guide-to-efficient-use-of-dotenv-in-node-js-3d27e1decdc0",
    date: "2024-01-24",
    year: "2024",
  },
];
