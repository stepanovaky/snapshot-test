import renderer from 'react-test-renderer';
import Messages from './Messages';

it('Messages UI renders as expected', () => {
const tree = renderer
  .create(<Messages name="Messages" unread={4}/>)
  .toJSON();
expect(tree).toMatchSnapshot();  
});

// can add different tests changing the conditions to see if the component still renders correctly

it('Messages UI renders as expected with no unreads', () => {
  const tree = renderer
    .create(<Messages name="Messages" unread={0}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});