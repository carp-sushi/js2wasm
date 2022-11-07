module Main where

import Prelude

import Effect (Effect)
import Effect.Console (log, logShow)

import Cmd (execute)

-- | Demonstrate how to execute the command.
-- | This is required to bundle the Cmd in the module output.
main :: Effect Unit
main = do
  let input = { name: "World" }
  log "input:"
  logShow input
  log "output:"
  logShow $ execute input
