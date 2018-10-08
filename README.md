# Autogit Command - Github Publish

A command for publishing repositores to GitHub.

## Install

```sh
npm install --save autogit-command-github-publish
```

## Usage

#### Options

This command uses the following options object:

```js
{
  remote: 'origin', // Using this name for the newly created repository
  token: '', // GitHub token
  message: 'Initial commit', // Commit message for the initial commit, set it to false to disable this
  force: false, // Don't ask for confirmation
  private: false, // Don't publish as private
  ssh: true // Use SSH rather than HTTPS
}
```

#### Configuration

Add this command to your configuration:

```js
const githubPublish = require ( 'autogit-command-github-publish' );

module.exports = {
  commands: {
    'github-publish': githubPublish ({ /* YOUR OPTIONS */ })
  }
}
```

#### CLI

Call it from the CLI with:

```sh
autogit github-publish
```

## License

MIT © Fabio Spampinato
