module Cmd where

import Prelude

-- | Input a name
type Input =
  { name :: String
  }

-- | Output a greeting
type Output =
  { greeting :: String
  }

-- | Execute the command
execute :: Input -> Output
execute { name } =
  { greeting: "Hello, " <> name <> "!"
  }
