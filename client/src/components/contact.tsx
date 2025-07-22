import { MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-theme-secondary mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your next project or opportunity? Connect with me on LinkedIn to start the conversation.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="text-theme-primary text-xl w-8 mr-2" />
                <span className="text-gray-700 text-lg">Berkeley, CA</span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-theme-secondary mb-6">Connect With Me</h3>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/dedricksiddall/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-theme-primary text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a 
                  href="https://github.com/dedricksiddall" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a 
                  href="https://www.behance.net/dedricksiddall" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <i className="fab fa-behance text-2xl"></i>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <h4 className="text-xl font-semibold text-theme-secondary mb-4">Ready to Collaborate?</h4>
              <p className="text-gray-600 mb-6">Currently accepting new projects and opportunities. Let's discuss how we can work together.</p>
              <a 
                href="https://www.linkedin.com/in/dedricksiddall/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-theme-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
              >
                <i className="fab fa-linkedin mr-3 text-xl"></i>
                Message Me on LinkedIn
              </a>
              <p className="text-sm text-gray-500 mt-4">Response time: Usually within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
