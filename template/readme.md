<% const camelcasedName = this.camelcase(name) -%>
<% const normalUserName = username.toLowerCase() -%>
# <%= name %>

[![Build Status](https://travis-ci.org/<%= normalUserName %>/<%= name %>.svg?branch=master)](https://travis-ci.org/<%= normalUserName %>/<%= name %>)

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/<%= normalUserName %>/<%= name %>)

## Usage

```sh
$ npm install
$ BOT_TOKEN='123:......' npm run dev
```

```sh
$ yarn
$ BOT_TOKEN='123:......' yarn dev
```

## Deployment

This bot can be deployed to [now](https://zeit.co/now) by Zeit.
Assuming you've got `now` installed and set up:

```sh
$ now -e BOT_TOKEN='123:......' <%= normalUserName %>/<%= name %>
```

Alternative, deploy right now without even leaving the browser:

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/<%= normalUserName %>/<%= name %>)
