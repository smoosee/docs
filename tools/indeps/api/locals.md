# locals

This command will link dependencies that exist on the local filesystem into your working directory application. This is helpful when you need to work on a library for development reasons, and test it side-to-side with an application that consumes it. This basically navigates to the local package directory, link it to global node_modules, then navigate back to the application, and link it again from the global node_modules into the application node_modules.

#### Options

_dependencies.locals_

A key-value map of local dependencies that will be linked, the key represents the name of the package after installation. The value represents the actual path of the package on the local filesystem.
