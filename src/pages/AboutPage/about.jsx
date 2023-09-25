import React from 'react';

function ProjectDetails() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">About the Project</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Name: Suraj Pratap Singh</h2>
          <p className="text-gray-600">Email: pratapsinghsuraj420@gmail.com</p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Description:</h2>
            <p className="text-gray-600">
              The project has a separate backend hosted on{' '}
              <a
                href="https://booksdbdep.onrender.com/"
                className="text-blue-500 hover:underline"
              >
                https://booksdbdep.onrender.com/
              </a>{' '}
              whose code is at{' '}
              <a
                href="https://github.com/Spsden/booksdb"
                className="text-blue-500 hover:underline"
              >
                https://github.com/Spsden/booksdb
              </a>
              . The backend uses Express, Node.js, and Mongoose to build a User Authentication system with login and signup. The backend also provides data for each user's books issued. The assignment didn't explicitly mention to develop a backend for it, but I think that is the ideal way.
            </p>
            <p className="text-gray-600">
              The frontend has a home page, a user page that shows up only when authenticated, a search page that supports pagination. When you login or create an account, it redirects to the user page. There you can see books issued to you. Please create an account to see the full functionality.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Frontend Details:</h2>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>React.js</li>
              <li>React Router Dom v6</li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Backend Details:</h2>
            <ul className="list-disc list-inside text-gray-600 pl-4">
              <li>Express</li>
              <li>Node.js</li>
              <li>Mongoose</li>
              <li>MongoDB</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
