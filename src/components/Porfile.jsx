const Profile = () => {
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold">Afnan Ferdousi</div>
          <div className="flex items-center space-x-2">
            <span>2:34</span>
            <div className="flex items-center space-x-1">
              <div className="h-4 w-4 bg-black"></div>
              <div className="h-4 w-4 bg-black"></div>
            </div>
            <span>3%</span>
          </div>
        </div>
  
        {/* Education Section */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div className="flex flex-col space-y-4">
            {/* Education Item */}
            <div className="flex items-start space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="UBC"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-lg font-medium">
                  The University of British Columbia
                </h3>
                <p className="text-gray-600">
                  Micromasters, Computer Software Engineering <br />
                  <span className="text-gray-500">Jul 2024 - Jan 2025</span>
                </p>
              </div>
            </div>
  
            {/* Education Item */}
            <div className="flex items-start space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="ACCA"
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-lg font-medium">ACCA</h3>
                <p className="text-gray-600">
                  ACCA, Accounting <br />
                  <span className="text-gray-500">2021 - 2025</span>
                </p>
              </div>
            </div>
          </div>
  
          {/* Show All Button */}
          <button className="mt-4 text-blue-500">Show all 3 educations →</button>
        </div>
  
        {/* Projects Section */}
        <div className="bg-white rounded-lg p-4 shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <div className="space-y-4">
            {/* Project Item */}
            <div>
              <h3 className="text-lg font-medium">KOC Freelancing</h3>
              <p className="text-gray-600">
                May 2024 - Jul 2024 <br />
                <span className="text-gray-500">Associated with Dreabuild</span>
              </p>
              <p className="text-gray-500 mt-2">
                One of the first freelance platforms in Turkey! Built with
                technologies that provide high efficiency and scalability...
              </p>
  
              {/* Skills */}
              <p className="mt-2 text-gray-600">
                <span className="font-semibold">React.js</span>, Next.js and +12
                skills
              </p>
  
              {/* Project Images */}
              <div className="flex space-x-2 mt-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Project Screenshot"
                  className="w-24 h-16 object-cover rounded-lg"
                />
                <img
                  src="https://via.placeholder.com/100"
                  alt="Project Screenshot"
                  className="w-24 h-16 object-cover rounded-lg"
                />
                <div className="w-24 h-16 flex items-center justify-center bg-gray-200 rounded-lg">
                  +2
                </div>
              </div>
  
              {/* Contributors */}
              <div className="mt-4 flex items-center space-x-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Contributor"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="https://via.placeholder.com/40"
                  alt="Contributor"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-gray-600">Other contributors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;