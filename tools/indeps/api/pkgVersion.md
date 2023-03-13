# pkgVersion

This command includes extra steps to retrieve the latest published version of the library from the npm registry. Then increment the configured version part and update the package.json file with that new value.

#### Options

_build.srcPath_ - (default: src)

Path that contains the package.json file that needs updating. This is helpful if you need to update a different package.json than the one located in the root directory (in case you are using Typescript with different package.json that will be used for publishing).

_build.version.increment_ - (default: patch)

Which part of the version that will be incremented during the processing of this command.
