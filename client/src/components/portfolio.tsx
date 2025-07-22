import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Swat the Dedrick",
      category: "Vibe Coding",
      description: "I first heard the term vibe coding at a Databricks conference in San Francisco. I decided to try it out on a platform called replit. This is the result of my first attempt out of the box. Two hours from first instruction to deployment. Follow the link to play.",
      image: "https://th.bing.com/th/id/OIP.9Ikt4JVqeQmBVRpL1elrPgHaDe?w=334&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      tags: ["AI", "Coding", "Prototyping"],
      categoryColor: "bg-blue-100 text-blue-800",
      externalLink: "https://swat-dedrick-dedricklsiddall.replit.app/"
    },
    {
      title: "Sankey Diagrams",
      category: "Data Visualization",
      description: "I love Sankey diagrams. I'm putting one together using Census state migration data. I'll put it up here as soon as I'm happy with it.",
      image: "https://2.bp.blogspot.com/-EcGAukbnb30/XcUceU54HFI/AAAAAAAAH6E/ssDfwlHuN6UNWeSj8E7xD8q3xHBT7XVEQCNcBGAsYHQ/s1600/sankey-diagram-rodrigo-calloni-ken-fleriage.png&auto=format&fit=crop&w=600&h=400",
      tags: ["Sketch", "iOS Design", "Animation"],
      categoryColor: "bg-green-100 text-green-800"
    },
    {
      title: "YouTube",
      category: "Branding",
      description: "I have a YouTube channel! Ok, it only has one video on it, but I'm a busy guy. This is from 2024, when I was just getting started on my Databricks journey. I have a lot more to say now.",
      image: "https://yt3.googleusercontent.com/1TiR6kD_0JK6QJ5jAr5Pvt2v0NOkz6RwT7ilhj8NVKiUT4gwx-IgZcOnWliyCQQqGV-kAbw3tCw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
      tags: ["Video", "Databricks", "Introduction"],
      categoryColor: "bg-purple-100 text-purple-800",
      externalLink: "https://www.youtube.com/channel/UC88_5O-Oh9egH1oN53cYM1Q"
    },
    {
      title: "Placeholder",
      category: "Dashboard",
      description: "Placeholder text",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      tags: ["D3.js", "Data Viz", "React"],
      categoryColor: "bg-orange-100 text-orange-800"
    },
    {
      title: "Placeholder",
      category: "Web Design",
      description: "Placeholder text",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      tags: ["WordPress", "Accessibility", "SEO"],
      categoryColor: "bg-red-100 text-red-800"
    },
    {
      title: "Placeholder",
      category: "Design System",
      description: "Placeholder text",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      tags: ["Storybook", "Design Tokens", "Documentation"],
      categoryColor: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-theme-neutral">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-theme-secondary mb-4">Selected Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Just some fun extras, outside of work. These examples range from the serious to the frivolous. They are included here to provide some insight into my skillset and though processes. I'll be adding more as time permits.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            const ItemWrapper = item.externalLink ? 'a' : 'div';
            const wrapperProps = item.externalLink 
              ? { href: item.externalLink, target: "_blank", rel: "noopener noreferrer" }
              : {};
            
            return (
              <ItemWrapper 
                key={index} 
                {...wrapperProps}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 ${item.categoryColor} text-xs font-medium rounded-full`}>
                      {item.category}
                    </span>
                    <ExternalLink className={`h-4 w-4 transition-colors duration-200 ${
                      item.externalLink 
                        ? 'text-theme-primary group-hover:text-blue-700' 
                        : 'text-gray-400 group-hover:text-theme-primary'
                    }`} />
                  </div>
                  <h3 className="text-lg font-semibold text-theme-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ItemWrapper>
            );
          })}
        </div>
        

      </div>
    </section>
  );
}
