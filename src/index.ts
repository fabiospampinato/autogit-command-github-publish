
/* IMPORT */

import * as _ from 'lodash';
import push from 'autogit-plugin-push';
import publish from 'autogit-plugin-github-publish';
import syncDescription from 'autogit-plugin-github-sync-description';
import syncKeywords from 'autogit-plugin-github-sync-keywords';
import * as minimist from 'minimist';

const argv = minimist ( process.argv.slice ( 2 ) );

/* GITHUB PUBLISH */

const defaultOptions = {
  remote: 'origin',
  token: '',
  message: 'Initial commit',
  force: !![argv.force, false].find ( _.isBoolean ),
  private: !![argv.private, false].find ( _.isBoolean ),
  ssh: _.isBoolean ( argv.https ) ? !argv.https : true
};

function githubPublish ( customOptions?: Partial<typeof defaultOptions> ) {

  const options = Object.assign ( {}, defaultOptions, customOptions );

  return {
    description: 'Publish to GitHub',
    skip: () => !options.token && 'You need to provide a GitHub token',
    options: [
      ['--private', 'Publish as private'],
      ['--force', 'Don\'t ask for confirmation'],
      ['--https', 'Use https']
    ],
    plugins: [
      publish ( options ),
      push ({ remote: options.remote }),
      syncDescription ({ token: options.token }),
      syncKeywords ({ token: options.token })
    ]
  };

}

/* EXPORT */

export default githubPublish;
