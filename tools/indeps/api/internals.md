# internals

This command will install dependencies from internal behind-proxy registry. The installed dependencies will not be added to package.json, but they will show in package-lock.json if applicable. This is very helpful when you need to install these dependencies after the regular install from npmjs registry.

#### Options

_dependencies.registry_

URL of the internal registry that will be used to install the dependencies.

_dependencies.internals_

A key-value map of dependencies that will be installed, the key represents the name of the package after installation. The value represents the actual name of the package in the internal registry.

For Example: "@smoosee/indeps": "internal-deps@1.0.34". This will install `internal-deps` with the version `1.0.34` and name it `@smoosee/indeps` in the node_modules directory.

This is the equivalent to executing

```
npm i --no-save @smoosee/indeps@internal-deps@1.0.34 --registry=https://registry.npmjs.org
```
