use anyhow::{Error, Result};
use std::path::Path;
use wizer::Wizer;

// TODO: configurable optimization

pub(crate) struct Writer<'a> {
    wasm: &'a [u8],
}

impl<'a> Writer<'a> {
    pub fn new(wasm: &'a [u8]) -> Self {
        Self {
            wasm,
        }
    }

    pub fn write_wasm(self, dest: impl AsRef<Path>) -> Result<(), Error> {
        let wasm = Wizer::new()
            .allow_wasi(true)?
            .inherit_stdio(true)
            .run(self.wasm)?;
        std::fs::write(dest.as_ref(), wasm)?;
        Ok(())
    }
}
