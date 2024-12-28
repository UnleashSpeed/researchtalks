# Forum Website

This is a forum web application where users can post queries and receive answers. The application includes features for social login and tutorial sections to help users navigate the platform.

## Features

- User authentication with social login options
- Ability to post queries and receive answers
- Tutorial section for user guidance
- Responsive design for optimal viewing on various devices

## Project Structure

```
forum-website
├── public
│   ├── index.html          # Main HTML document
│   └── styles
│       └── main.css       # CSS styles for the application
├── src
│   ├── components
│   │   ├── Header.js      # Navigation bar component
│   │   ├── Footer.js      # Footer component
│   │   └── Post.js        # Component for displaying individual posts
│   ├── pages
│   │   ├── Home.js        # Landing page component
│   │   ├── Login.js       # Login page component
│   │   ├── Register.js    # Registration page component
│   │   ├── Tutorial.js     # Tutorial page component
│   │   └── Query.js       # Component for displaying specific queries
│   ├── services
│   │   └── authService.js  # Authentication service
│   ├── utils
│   │   └── api.js         # Utility functions for API calls
│   └── App.js             # Main application component
├── package.json            # npm configuration file
├── .babelrc               # Babel configuration
├── .eslintrc.json         # ESLint configuration
├── .gitignore              # Git ignore file
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd forum-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```

Visit `http://localhost:3000` in your browser to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.