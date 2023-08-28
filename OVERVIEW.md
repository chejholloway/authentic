# Frontend Interview Project - Submission Overview

Hello Team,

I hope this message finds you well. I'm thrilled to share my submission for the Frontend Interview Project. I've thoroughly enjoyed working on this project and I'm excited to walk you through what I've implemented, the decisions I made, and my approach to the task.

## Implementation Details

### Technologies Used
For this project, I chose these technologies  because the Recruiter Jim Clifford said that this was what I would most likely be working with "Front End Dev work utilizing Typescript, React, React Native, Next.js and Redux Toolkit."

#### **CRA-Typescript Template** ####

I opted for the CRA-Typescript template in an effort to keep things simple. It offers a clean setup for React apps with TypeScript, and is perfect for browser-based projects that don't need server-side rendering or native mobile features. Since this assignment was a  smaller project, it let me focus on coding and features rather than advanced concepts.

**React (18.2.0)** ***(Or the new jQuery as I like to call it)***

React's is the the architect of modern user interfaces. It structures them with components, speeds things up with its virtual DOM, and keeps data flowing smoothly in one direction. It's practically the poster child for modern web apps, especially SPAs.

**TypeScript (5.2.2):**

TypeScript safeguards the code by offering static types. This prevents bugs and enhances the development experience. (Code hints and completion in VS Code are AWESOME!)

#### **State Management** ####

**@reduxjs/toolkit - RTK:**

This library simplifies state management by embracing Redux principles (State, Actions & Reducers) without the headache of boilerplate code. It makes code easier to maintain and blends seamlessly with React.

#### **Styling & Animatations** ####

**@material-tailwind/react (2.1.1):**

 @material-tailwind/react offers - Material Design's elegance with Tailwind CSS's practicality. (Ready made React Components)

**twin.macro (3.4.0):**

  twin.macro brings together tailwindcss's handy utility classes and the dynamic charm of CSS-in-JS.

**@emotion/react (11.11.1) and @emotion/styled (11.11.0):**

- They come bundled with tw.macro.

#### **Testing** ####

**@testing-library/react (14.0.0):**

This trusted library gives developers a user's perspective on testing. It ensures our app behaves as users expect.

#### **Clean Code** ####

**Eslint, Prettier, Husky, & Lint-Staged (and assorted plugins):**

- Code standards enforcement. They foster a cohesive codebase, ensuring it's not just functional, but a joy to read and work with.

### Project Structure
I structured the project in a modular way to promote reusability and maintainability. The main components are organized into separate directories, I placed all of the styles into one file `TwinStyles.styles.tsx` so that app wide changes can be easily made.

### Home Page
The Home Page lists GitHub users by querying the [users](https://api.github.com/users) endpoint. For each user, I display their avatar and username. This page provides a solid foundation for listing users and can easily be extended with more features if needed.

### User Detail Page
The User Detail Page showcases comprehensive information about a selected user. It displays the user's repositories, organizations, and their first five followers. This page is designed to provide a clear overview of a user's GitHub presence.

### Error Handling and Rate Limiting
I took into consideration GitHub's rate limiting and added a mechanism to handle API errors gracefully. In case of a 404 error or other issues, users are presented with a user-friendly message. For rate limiting, I used a personal access token to ensure smooth API requests without hitting the rate limits.

### Testing
I followed a Test-Driven Development (TDD) approach and wrote unit tests using Jest and React Testing Library. Components and their functionality are thoroughly tested to ensure stability and maintainability.

## Trade-offs and Future Improvements

### Trade-offs
Due to the time constraints of the project, there were a few trade-offs made. While I focused on building a solid foundation, some features that could be considered "nice-to-haves" were omitted. Additionally, UI/UX enhancements could be further improved with more time.

### Future Extensions
Given more time, I would consider the following improvements:
- Implement pagination for the list of users on the Home Page to handle large user lists more efficiently.
- Enhance the User Detail Page by adding more interactive elements, such as clickable organization links and followers' profiles.
- Integrate a caching mechanism to reduce API calls and enhance performance.

## Conclusion

I enjoyed working on this project and it provided a great opportunity to demonstrate my frontend development skills. I'm excited about the prospect of joining the Real team and contributing to projects that can make a positive impact. Thank you for this opportunity!

Best Regards,
 - Che' J. Holloway
 - chejholloway@protonmail.com