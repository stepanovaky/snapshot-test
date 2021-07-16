//SETUP

// 1. 'npm install react-test-renderer --save-dev'

// 2. No changes are needed in the setupTests.js file

// 3. The snapshot tests are placed into the componentName.test.js files 

// 4. 'import renderer from 'react-test-renderer'

// 5. Important: With Jest, there should be a corresponding componentName.test.js for every new Component created. However, snapshot testing is only used for components that render to the UI. If the component only returns an object, an integer, some sort of information that is used within another function/component, it will be a waste of your time to write snapshot testing for that component. A rule of thumb is that if a component returns JSX, it renders to the UI. 

// copy the boilerplate code from the App.test.js to your App.test.js

// run npm test 

// because there is no snapshot to reference, since this is the first time you're running npm test, you will notice a new folder _snapshots_, in it you will see App.test.js.snap, this will contain the snapshot that was created from running the test, and the test will pass. 

// If you make no changes and run npm test again, or just press the letter 'a', the test will pass because the new snapshot will match the previous snapshot.

//If you make changes to what the component will render and run npm test again, your test will fail. This is a signal that the UI has changed. When you are coding, if this is a mistake, it signals that you need to inspect your code and tells you which component is responsible. If this is expected, you can press 'u' to update the snapshots, and your tests will pass again. 

//I made a component called Messages that renders props. In Messages.test.js, you can see how you can create multiple snapshot tests to see if the component renders correctly and repeatedly in different conditions. The cool thing about being able to directly test Messages, is that you don't even have to import Messages anywhere other than the test file to check that it renders correctly. You'll notice that Messages actually doesn't display on the UI because I haven't imported it into App.js, where I left the boilerplate React code. Feel free to play around with this. 