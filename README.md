# User Management System

A modern, responsive user management system built with React and Tailwind CSS. This application provides a clean and intuitive interface for managing users with features like adding, editing, and deleting user records.

## Features

- 📱 Fully responsive design with mobile-first approach
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time form validation
- 📊 User data persistence using localStorage
- 🎯 Duplicate user detection
- 🎨 Beautiful gradient UI elements
- 📱 Mobile-friendly hamburger menu
- ✨ Smooth animations and transitions

## Tech Stack

- React.js
- Tailwind CSS
- React Icons
- UUID for unique ID generation

## Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
cd user-management
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── DeleteDialog.js
│   ├── DuplicateUserModal.js
│   ├── MainSection.js
│   ├── Sidebar.js
│   ├── UserForm.js
│   └── UserList.js
├── utils/
│   └── emailValidator.js
└── App.js
```

## Deployment to GitHub Pages

Yes, you can deploy this React application to GitHub Pages. Here are the steps:

1. First, add the `homepage` field to your `package.json`:
```json
{
  "homepage": "https://<your-github-username>.github.io/user-management"
}
```

2. Install the `gh-pages` package:
```bash
npm install --save-dev gh-pages
# or
yarn add --dev gh-pages
```

3. Add deployment scripts to your `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy your application:
```bash
npm run deploy
# or
yarn deploy
```

5. Go to your GitHub repository settings:
   - Navigate to "Settings" > "Pages"
   - Under "Source", select the `gh-pages` branch
   - Your site will be published at `https://<your-github-username>.github.io/user-management`

## Important Notes

- Make sure to replace `<your-github-username>` with your actual GitHub username in the homepage URL
- The first deployment might take a few minutes to become available
- You can check the deployment status in the "Actions" tab of your GitHub repository

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
