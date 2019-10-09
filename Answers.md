1. What problem does the context API help solve?
    - The context API allows for developers to pass state anywhere within our component tree without the need to drill props all the way down the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - Actions: Are used to dispatch commands.

    - Reducers: Used to take actions and return resonses

    - Store: This contains the state and reducers and helps centralize the applicatons workings

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state refers to global state of the application. Component state refers to a single components inside of the application.
 
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - Redux thunk serves as middleware and it allows us to intercept action and based on logic decide whether to dispatch a command or stop it

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    - I think that each state management system serves its own purpose. Redux would be better suited for larger applications but can be too cumbersome with very simple applications.

