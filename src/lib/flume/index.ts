import { FlumeConfig, Colors, Controls } from 'flume';

const config = new FlumeConfig();
config.addRootNodeType({
  type: 'homepage',
  label: 'Homepage',
  initialWidth: 170,
  inputs: ports => [
    ports.string({
      name: 'title',
      label: 'Title',
    }),
    ports.string({
      name: 'description',
      label: 'Description',
    }),
    ports.boolean({
      name: 'showSignup',
      label: 'Show Signup',
    }),
    ports.number({
      name: 'copyrightYear',
      label: 'Copyright Year',
    }),
  ],
});

export default config;
