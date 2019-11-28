<% const camelcasedName = this.camelcase(name) -%>
<% const normalUserName = username.toLowerCase() -%>

[![Build Status](https://travis-ci.org/<%= normalUserName %>/<%= name %>.svg?branch=master)](https://travis-ci.org/<%= normalUserName %>/<%= name %>)
# <%= name %>

## Usage

```sh
$ npm install
$ BOT_TOKEN='123:......' npm run dev
```

```sh
$ yarn
$ BOT_TOKEN='123:......' yarn dev
```
