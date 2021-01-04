import initStoryshots, {
  Stories2SnapsConverter,
} from '@storybook/addon-storyshots';
import renderer from 'react-test-renderer';

initStoryshots({
  framework: 'react',
  test: ({ story, context }) => {
    const converter = new Stories2SnapsConverter();
    const snapshotFilename = converter.getSnapshotFileName(context);

    const storyElement = story.render(context);
    const tree = renderer.create(storyElement);

    // eslint-disable-next-line jest/no-standalone-expect
    expect(tree).toMatchSpecificSnapshot(snapshotFilename);
  },
});
