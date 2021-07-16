import renderer from 'react-test-renderer';
import App from './App';

it('App renders as expected', () => {
  const tree = renderer
    .create(<App />).toJSON()
    expect(tree).toMatchSnapshot();
})
