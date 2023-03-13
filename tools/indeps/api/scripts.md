---
next: false
---

# Scripts

You can actually use the commands in their respective places by using scripts instead.

Scripts are just aliases for the commands to make more sense in the grander scheme of things.

For example: use `indeps postinstall` in your `postinstall` script instead of `indeps internals`.

### postinstall

This executes the `internals` command.

### prestart

This executes the `locals` command.

### prebuild

This executes both `buildVersion` & `pkgVersion` commands.

### postbuild

This executes `cleanupBuild` command.

### prepack

This executes `moveDist` command.

### postpack

This executes `restoreDist` command.


