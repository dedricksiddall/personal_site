export default function Footer() {
  return (
    <footer className="bg-theme-secondary text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Dedrick Siddall. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
          </div>
        </div>
      </div>
    </footer>
  );
}
