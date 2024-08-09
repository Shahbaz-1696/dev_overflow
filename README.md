# Dev Overflow - A location for developers to find and give the solutions to their and other's problems.

## About this project:

- Firstly, the user can signup with a new account or login using google or github account. The login UI was created using clerk API.
- This project helps the user to ask questions related to tech and clear their doubts.
- It also allows the user to answer the questions asked by another user.
- User can go to question details page and upvote or downvote a particular question. Also they can save a particular question to their collection.
- There is also a page for finding jobs in different locations.
- User can also view thier profile and delete or edit a particular question or answer that they have asked. User can also edit their profile.

## Instructions to clone and install the project locally:

- Clone the project from the github link in the code section.
- Open the project in vscode or any other terminal of your choice.
- cd to project folder where you have cloned the project.
- Run the command

```bash
npm install
#or
yarn install
#or
pnpm install
#or
bun install
```

in the command line to install all the dependencies.

- Run the command

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

in the command line to run the app.

## Instructions to use the project:

- Signup to enter app by creating a new account or login using the existing google account or github account.
- The user can see different question cards posted by different users on the home page. User can click on question card to see the details about the question.
- LeftSidebar contains different page links to traverse through different pages.
- RightSidebar conatins different top rated questions and top tags.
- There is a global search bar to search through the app about different questions, answers, tags and users.
- There is a local search bar to search through a particular page for exapmle, home page has a separate local search to search through that page.
- User can upvote, downvote and save a particular and answer to the question doubt on the question details page.
- User can ask a question on a separate ask-a-question page by adding a title, description for the question where they can include codes in the description section and it will be highlighted separately and add tags in tags sections by typing and pressing enter in the tags field.
- User can add a maximum of 3 tags and minimum of 1 tag. Also , the user has to write a description of minimum 100 characters.
- There is a separate page to view saved question in collections page.
- Details about different users in the community is shown in the community page.
- Tags shows the details about different tags added in the app.
- By clicking on a particular tag user can see all questions related to that tag.
- User can find different jobs in find jobs sections and visit the link to apply for the job by clicking on view job button.
- User can edit their profile details and edit or delete a particular question or answer in the profile page. Also the user can see their details and recieve a badge based on their interactions in the app.

## Technologies used to create the app:

![Static Badge](https://img.shields.io/badge/next_js-blue)

![Static Badge](https://img.shields.io/badge/react-purple)

![Static Badge](https://img.shields.io/badge/typescript-blue)

![Static Badge](https://img.shields.io/badge/clerk_for_login-orange)

![Static Badge](https://img.shields.io/badge/mongodb-green)

![Static Badge](https://img.shields.io/badge/tailwind_css-blue)

![Static Badge](https://img.shields.io/badge/mongoose-yellow)

![Static Badge](https://img.shields.io/badge/shadcn-black)
