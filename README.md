# Flash Forge Fiction README

## Project Description

Flash Forge Fiction is a collaborative writing platform designed to spark creativity and forge connections through storytelling. In this unique space, users come together to create and continue stories in just a hundred words, making every contribution a pivotal piece of an ever-evolving narrative tapestry. The project aims to offer an unpredictable and enjoyable writing experience, where the simplicity of text-based collaboration is harnessed to bring writers' imaginations to life.

Flash Forge Fiction is developed as part of the Dev Quest challenge, specifically tailored for a 40-hour MVP to demonstrate rapid development and innovative use of technology in creating engaging, community-driven platforms.

## Challenge and Tools

- **Challenge Link:** [Dev Quest 008 - Flash Forge Fiction](https://quine.notion.site/008-Devs-just-wanna-have-fun-224ef86c2dd143b1873c49c8edd3e316)

  - This challenge tasks developers with building an app that can help people have fun!

- **Required Tools:**
  - **[FlagSmith](https://flagsmith.com/):** A feature flag and remote config service. FlagSmith allows us to test new features like voting systems and story direction choices in a controlled manner, enabling or disabling features without deploying new code.
  - **[MindsDB](https://www.mindsdb.com/):** An AI layer for existing databases that enables predictive modeling directly from the database. MindsDB will be used to generate story prompts, summarize drafts, and automatically tag novel themes, enhancing the user experience by suggesting content and organizing stories intelligently.

## Demo

TODO

## Contributing to Flash Forge Fiction

### Prerequisites

Before contributing to Flash Forge Fiction, ensure you have the following installed:

- Node.js (v18.5.5 or higher)
- A package manager (npm, pnpm or yarn)
- Docker/Docker-compose
- Git for version control

### Getting Started

1. **Fork and Clone the Repository**

   - Fork the project repository to your GitHub account.
   - Clone your forked repository to your local machine:
     ```
     git clone https://github.com/your-username/flash-fiction-forge.git
     ```
   - Navigate into the project directory:
     ```
     cd flash-fiction-forge
     ```

2. **Install Dependencies**

   - Install the project dependencies using npm or yarn:
     ```
     pnpm install
     ```
     or
     ```
     npm install
     ```
     or
     ```
     yarn
     ```

3. **Running the Development Web Server**

   - To start the SvelteKit development server, run:

   ```
   pnpm run dev
   ```

   or

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

   - Open [http://localhost:3000](http://localhost:3000) to view the application in your browser. The app will automatically reload if you make edits.

4. **Running MySQL, MindsDB, and Flagsmith services**

   - To start the backend services run:

   ```
   pnpm run docker:up
   ```

   or

   ```
   npm run docker:up
   ```

   or

   ```
   yarn docker:up
   ```

5. **Making Contributions**
   - Create a new branch for your feature or bug fix:
     ```
     git checkout -b feature/your-feature-name
     ```
     or
     ```
     git checkout -b bugfix/your-bugfix-name
     ```
   - After making your changes, commit your code and push the branch to your fork:
     ```
     git push -u origin feature/your-feature-name
     ```
   - Submit a pull request from your forked repository to the main project repository. Ensure your pull request describes the changes you've made and any other relevant information.

### Guidelines

- **Code Style:** Follow the established code style in the project. Use prettier and linting tools provided in the project to ensure consistency.
- **Commit Messages:** Write clear and meaningful commit messages to make the project history easier to understand.
- **Documentation:** Update the README.md or other documentation files as necessary to reflect new features or changes in the project setup.

Thank you for considering to contribute to Flash Forge Fiction!
