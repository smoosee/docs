# buildVersion

This command will use the following options to generate a build version and populate it into a file of your choice.

#### Options

_build.version.filePath_:

Path of the file that includes the $BUILD_VERSION flag that will be replaced with the generated version.

_build.version.prefix_:

Prefix that will be preappended to the generated version.

_build.version.map_ - (default: minor)

Mapping to be used when retrieving version from package.json. Values accepted major, minor & patch.

_build.version.increment_ - (default: patch)

Part of the version that will be auto incremented. Values accepted major, minor, patch. Leave empty for no changes to the version.
