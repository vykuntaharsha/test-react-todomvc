# To-DoMVC(React)

## Demo

[Todo-Harsha](http://todo-harsha.herokuapp.com)

## Start Application Locally

```javascript
clone the repository
cd to project directory
npm install
npm start

//visit localhost:3000 in browser

//to run tests
npm test
```

## Implementation

The app uses the current stable version of `React` and `Redux`. With the help of redux it is easy to manage state maintain the tests. The application is bootstrapped using `create-react-app`.

## Project Structure

```
Project/
        - public /
            └──index.html (required by react-scripts)
        - src /
             - actions/
             - components/
             - constants/
             - containers/
             - styles/
                └──base.css
                └──app.css
             - reducers/
             - test/
             - index.js (required by react-scripts to start app)
             - setupTests.js (require to configure Enzyme)

```

### actions

-   contains all the actions required by the components in various stages of the app.

### components

-   App.jsx - base parent component.
-   FilterItem.jsx - filter component used to render filter item.
-   TodoItem.jsx - todo component used to render todo item.

### constants

-   contains all the constants required in the project.

### containers

-   ActiveTodosCount.jsx - connects to the store and updates when the active todos changes.
-   AddTodo.jsx - connects to the store and adds the To-do to the store.
-   FilterList.jsx - connects to the store and updates the filters activity based on the visibilityFilter in store.
-   TodoList.jsx - connects to the store and updates based on the To-dos provided via props.

### styles

-   contains all the css/style files required in app.

### reducers

-   todos.js - updates the To-dos list in the store based on the actions from the todo components.
-   visibilityFilter.js - updates the visibilityFilter in the store based on the actions from the filters.

### tests

-   contains all the tests to the `actions`, `components`, `containers` and `reducers`.

## Features

-   Responsive layout (mobile, tablet, laptop/desktops)
-   To-Dos can be added from the input (clicking `+` or pressing `Enter`).
-   To-Dos can be filtered from the filters (`All`, `Active`, `Completed`).
-   Total active To-Dos are displayed on the top of list all time.
-   Active To-Dos count displays the plural `items` correctly.
-   No of To-dos in respective filters is displayed against that filter. eg: `Completed 3`.
-   Mark a To-Do as completed by clicking the checkbox.
-   Marking a To-Do as complete will be displays a `line-through` for visual experience.
-   Delete a To-Do by clicking on the `x` button.
-   Hovering over Delete button changes the To-Do background to `red` for visual experience.

## Credit

Created by [Harsha Vykunta](https://www.linkedin.com/in/harsha-vykunta/).
