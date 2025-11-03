type ClassLike = {
  class: Packages.java.lang.Class<any>;
  [Symbol.hasInstance](v): boolean
 }
type isAny<T> = (T extends never ? true : false) extends false ? false : true;
type CombineTypes<A> = (
  A extends [infer B, ...infer Rest] ?
    isAny<B> extends true ?
      CombineTypes<Rest>
      : CombineTypes<Rest> extends never ? B : B & CombineTypes<Rest>
    : A extends [infer B] ?
      isAny<B> extends true ? never : B
  : never
)
type char   = number & {};
type byte   = number & {};
type short  = number & {};
type int    = number & {};
type long   = number | BigInt;
type float  = number & {};
type double = number & {};
type Function$$JS = Function;
declare module Packages {
  module jdk {
    module internal {
      module editor {
        module external {
          interface _ExternalEditor$$static extends ClassLike {
            edit(cmd: string[], initialText: string, errorHandler: java.util.function.Consumer<string>, saveHandler: java.util.function.Consumer<string>, suspendInteractiveInput: java.lang.Runnable, resumeInteractiveInput: java.lang.Runnable, wait: boolean, promptForNewLineToEndWait: java.lang.Runnable): void;
            _new(errorHandler: java.util.function.Consumer<string>, saveHandler: java.util.function.Consumer<string>, suspendInteractiveInput: java.lang.Runnable, resumeInteractiveInput: java.lang.Runnable, wait: boolean, promptForNewLineToEndWait: java.lang.Runnable): ExternalEditor;
          }
          let ExternalEditor: _ExternalEditor$$static;
          interface _ExternalEditor {
            _deleteDirectory(): void;
            _edit(cmd: string[], initialText: string): void;
            _launch(cmd: string[]): void;
            _saveFile(): void;
            _setupWatch(initialText: string): void;
            _dir: java.nio.file.Path;
            _errorHandler: java.util.function.Consumer<string>;
            _promptForNewLineToEndWait: java.lang.Runnable;
            _resumeInteractiveInput: java.lang.Runnable;
            _saveHandler: java.util.function.Consumer<string>;
            _suspendInteractiveInput: java.lang.Runnable;
            _tmpfile: java.nio.file.Path;
            _wait: boolean;
            _watchedThread: java.lang.Thread;
            _watcher: java.nio.file.WatchService;
          }
          interface ExternalEditor extends CombineTypes<[_ExternalEditor, java.lang.Object]> {}
        }
        module spi {
          interface _BuildInEditorProvider$$static extends ClassLike {
          }
          let BuildInEditorProvider: _BuildInEditorProvider$$static;
          interface _BuildInEditorProvider {
            edit(a0: string, a1: string, a2: java.util.function.Consumer<string>, a3: java.util.function.Consumer<string>): void;
            rank(): int;
          }
          interface BuildInEditorProvider extends CombineTypes<[_BuildInEditorProvider, java.lang.Object]> {}
        }
      }
    }
  }
}
