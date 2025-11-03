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
    module editpad {
      interface _EditPad$$static extends ClassLike {
        _L10N_RB_NAME: string;
        _new(windowLabel: string, errorHandler: java.util.function.Consumer<string>, initialText: string, closeMark: java.lang.Runnable, saveHandler: java.util.function.Consumer<string>): EditPad;
      }
      let EditPad: _EditPad$$static;
      interface _EditPad {
        _addButton(buttons: javax.swing.JPanel, rkey: string, mnemonic: int, action: java.awt.event.ActionListener): void;
        _buttons(closer: java.lang.Runnable, textArea: javax.swing.JTextArea): javax.swing.JPanel;
        _error(fmt: string, args: any[]): void;
        _error(fmt: string, ...args: any[]): void;
        _getResourceString(key: string): string;
        run(): void;
        _closeMark: java.lang.Runnable;
        _errorHandler: java.util.function.Consumer<string>;
        _initialText: string;
        _rb: java.util.ResourceBundle;
        _saveHandler: java.util.function.Consumer<string>;
        _windowLabel: string;
      }
      interface EditPad extends CombineTypes<[_EditPad, java.lang.Object, java.lang.Runnable]> {}
      interface _EditPadProvider$$static extends ClassLike {
        new(): EditPadProvider;
      }
      let EditPadProvider: _EditPadProvider$$static;
      interface _EditPadProvider {
        edit(windowLabel: string, initialText: string, saveHandler: java.util.function.Consumer<string>, errorHandler: java.util.function.Consumer<string>): void;
        rank(): int;
      }
      interface EditPadProvider extends CombineTypes<[_EditPadProvider, jdk.internal.editor.spi.BuildInEditorProvider, java.lang.Object]> {}
    }
  }
}
