mod engine;

use quickjs_wasm_rs::{json, Context, Value};

use once_cell::sync::OnceCell;
use std::io::{self, Read};

#[cfg(not(test))]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

static mut JS_CONTEXT: OnceCell<Context> = OnceCell::new();
static mut CMD: OnceCell<Value> = OnceCell::new();
static mut EXEC: OnceCell<Value> = OnceCell::new();

#[export_name = "wizer.initialize"]
pub extern "C" fn init() {
    unsafe {
        let mut context = Context::default();
        context.register_globals(io::stderr(), io::stderr()).unwrap();

        let mut contents = String::new();
        io::stdin().read_to_string(&mut contents).unwrap();
        let _ = context.eval_global("index.js", &contents).unwrap();

        let global = context.global_object().unwrap();
        let cmd = global.get_property("Cmd").unwrap();
        let exec = cmd.get_property("execute").unwrap();

        JS_CONTEXT.set(context).unwrap();
        CMD.set(cmd).unwrap();
        EXEC.set(exec).unwrap();
    }
}

fn main() {
    unsafe {
        let context = JS_CONTEXT.get().unwrap();
        let cmd = CMD.get().unwrap();
        let exec = EXEC.get().unwrap();

        let input = engine::read_input().expect("Failed to read command input");
        let msg = json::transcode_input(context, &input).unwrap();

        let result = exec.call(cmd, &[msg]);
        if result.is_err() {
            panic!("{}", result.unwrap_err().to_string());
        }

        let output = json::transcode_output(result.unwrap()).unwrap();
        engine::write_output(&output).expect("Couldn't write command output");
    }
}
