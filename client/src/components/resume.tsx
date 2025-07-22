import { Briefcase, GraduationCap, Wrench, Download, ExternalLink } from "lucide-react";

export default function Resume() {
  const experiences = [
    {
      title: "Enterprise Analytics Manager",
      company: "MedStar Health",
      period: "2022 - Present",
      responsibilities: [
        "Adoption champion for existing enterprise analytics platform, while acting as an internal consultant, thought leader, and program manager for infrastructure alignment concerning next generation platform implementation.",
        "Program manager for multiple initiatives including data governance, system integrations, data product development, and business intelligence platform support.",
        "Strategic planning and roadmap development to align enterprise analytics with future state enterprise technology architecture changes.",
        "Educator and mentor for data science and analytics teams, fostering a culture of continuous learning and improvement."
      ],
      externalLink: "https://www.medstarhealth.org/"
    },
    {
      title: "Founder",
      company: "MasT Analytics",
      period: "2017 - 2022",
      responsibilities: [
        "Designed, prototyped, and launched Fleet membership management platform.",
        "Led go to market strategy and business development, capturing 30+ licenses and 900+ seats.",
        "Investor relations and fundraising, incubator and accelerator programs.",
        "Independent contractor for National Committee for Quality Assurance (NCQA), assisting with data process automation."
      ],
      externalLink: "https://baltimore.citybuzz.co/article/504023/etc-announces-fleet-by-mast-as-the-official-app-of-baltimore-innovation-week-2018"
    },
    {
      title: "Technical Program Lead, AVP",
      company: "T. Rowe Price",
      period: "2014 - 2017",
      responsibilities: [
        "Led large, matrixed agile solution delivery team, responding to both strategic and tactical business needs.",
        "Improved assets under management (AUM) retention and customer experiences by building predictive behavioral analysis platform that integrated financial, transactional, and touch-point information systems.",
        "Promotion to AVP in recognition of superior contributions to Enterprise Analytics business unit."
      ],
      externalLink: "https://www.troweprice.com/"
    },
    {
      title: "Director of Strategic Engagements",
      company: "Acorn Systems",
      period: "2008-2014",
      responsibilities: [
        "Engagement manager and client relationship lead across financial services book of business.",
        "System architecture, configuration and delivery responsibilities overseeing matrixed technical and business teams with client and vendor members.",
        "Pre-sales, delivery, and post-implementation support for enterprise software solutions. Clients included BlackRock, Morgan Stanley, Sberbank of Russia, Fifth Third Bank, American Century Investments, and others."
      ],
      externalLink: "https://hbr.org/2004/11/time-driven-activity-based-costing"
    }
  ];

  const education = [
    {
      degree: "Master of Business Administation",
      school: "American University Kogod School of Business",
      period: "2006",
      specialization: "Concentration in Finance"
    },
    {
      degree: "Bachelor of Arts",
      school: "College of Charleston",
      period: "2002",
      specialization: "Major in Political Science, Minor in Russian Studies"
    }
  ];

  const skillCategories = [
    {
      category: "Design",
      skills: ["Wireframing", "Vibe Coding", "The best documentation you've ever seen!", "LEAN"],
      color: "bg-theme-primary"
    },
    {
      category: "Development",
      skills: ["Python", "JavaScript", "React", "Databricks", "SQL", "Generative AI with LangChain", "AWS", "Azure"],
      color: "bg-theme-accent"
    },
    {
      category: "Methodologies and Certifications",
      skills: ["PMP Certification", "Prototyping", "Agile/SCRUM/Kanban", "Design Thinking", "SDLC"],
      color: "bg-gray-600"
    }
  ];

  return (
    <section id="resume" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-theme-secondary mb-4">Resume</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of my professional experiences, education, and core competencies.
          </p>
        </div>
        
        {/* Resume Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-theme-secondary mb-6 flex items-center">
              <Briefcase className="text-theme-primary mr-3" />
              Professional Experience
            </h3>
            
            {experiences.map((experience, index) => (
              <div key={index} className="mb-8 bg-gray-50 p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-theme-secondary">{experience.title}</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-theme-primary font-medium">{experience.company}</p>
                      {experience.externalLink && (
                        <a 
                          href={experience.externalLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-theme-primary transition-colors duration-200"
                          title="View external link"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium mt-1 sm:mt-0">{experience.period}</span>
                </div>
                <ul className="text-gray-600 space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>• {responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Education & Skills Column */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-theme-secondary mb-6 flex items-center">
                <GraduationCap className="text-theme-primary mr-3" />
                Education
              </h3>
              
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl mb-4">
                  <h4 className="text-lg font-semibold text-theme-secondary">{edu.degree}</h4>
                  <p className="text-theme-primary font-medium">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                  {edu.specialization && (
                    <p className="text-gray-600 mt-2">{edu.specialization}</p>
                  )}
                </div>
              ))}
            </div>
            
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-theme-secondary mb-6 flex items-center">
                <Wrench className="text-theme-primary mr-3" />
                Core Skills
              </h3>
              
              <div className="space-y-4">
                {skillCategories.map((category, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-theme-secondary mb-3">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className={`px-3 py-1 ${category.color} text-white text-sm rounded-full`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <a 
            href="/DSiddall_Resume_2025.docx" 
            download="Dedrick_Siddall_Resume_2025.docx"
            className="inline-flex items-center px-6 py-3 border border-theme-primary text-base font-medium rounded-md text-theme-primary bg-white hover:bg-theme-primary hover:text-white transition-colors duration-200"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
