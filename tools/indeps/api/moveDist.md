# moveDist

This command will move everything in the root directory (except the files you choose to ignore) to a temp directory, then move everything in dist path into the root directory. This is helpful when your CI can only run `npm pack` without navigating to the dist patch to pack there. If this seems like extra steps, feel free to ignore. This is helpful to run in `prepack` script.

#### Options

_publish.distPath_ - (default: dist)

Path of dist directory whose contents will moved to the root directory.

_publish.tempPath_ - (default: ../.temp)

Path of the temp directory where the root directory contents will be moved.

_publish.keepFiles_

List of file name patterns that will be ignored when moving the root directory contents.
