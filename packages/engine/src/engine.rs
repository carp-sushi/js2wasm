use anyhow::Result;
use std::io::{copy, stdin, stdout, Write};

pub fn read_input() -> Result<Vec<u8>> {
    let mut reader = stdin();
    let mut input: Vec<u8> = vec![];
    copy(&mut reader, &mut input)?;
    Ok(input)
}

pub fn write_output(bytes: &[u8]) -> Result<()> {
    let mut handle = stdout();
    handle.write_all(bytes)?;
    handle.flush()?;
    Ok(())
}
