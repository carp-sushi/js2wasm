module Test.Main where

import Prelude
import Effect (Effect)
import Test.Unit (suite, test)
import Test.Unit.Assert as Assert
import Test.Unit.Main (runTest)

-- Module being tested
import Cmd (Input, Output, execute)

-- Test input
input :: Input
input =
  { name: "World"
  }

-- Expected output
output :: Output
output =
  { greeting: "Hello, World!"
  }

-- Run the unit tests
main :: Effect Unit
main = do
  runTest do
    suite "cmd execution" do
      test "render a greeting" do
        Assert.equal output (execute input)
