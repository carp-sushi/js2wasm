use std::path::PathBuf;
use structopt::StructOpt;

// TODO: configurable optimization

#[derive(Debug, StructOpt)]
#[structopt(name = "js2wasm", about = "JavaScript to WebAssembly toolchain")]
pub struct Options {
    #[structopt(parse(from_os_str))]
    pub input: PathBuf,
    #[structopt(short = "o", parse(from_os_str), default_value = "index.wasm")]
    pub output: PathBuf,
}
