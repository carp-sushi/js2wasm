{ name = "hello"
, dependencies = [ "console", "effect", "prelude", "test-unit" ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
