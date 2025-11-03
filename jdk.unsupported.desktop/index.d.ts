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
    module swing {
      module interop {
        module internal {
          interface _InteropProviderImpl$$static extends ClassLike {
            new(): InteropProviderImpl;
          }
          let InteropProviderImpl: _InteropProviderImpl$$static;
          interface _InteropProviderImpl {
          }
          interface InteropProviderImpl extends CombineTypes<[_InteropProviderImpl, java.lang.Object, sun.swing.InteropProvider]> {}
        }
        interface _DispatcherWrapper$$static extends ClassLike {
          setFwDispatcher(eventQueue: java.awt.EventQueue, dispatcher: DispatcherWrapper): void;
          new(): DispatcherWrapper;
        }
        let DispatcherWrapper: _DispatcherWrapper$$static;
        interface _DispatcherWrapper {
          createSecondaryLoop(): java.awt.SecondaryLoop;
          isDispatchThread(): boolean;
          scheduleDispatch(a0: java.lang.Runnable): void;
          _fwd: DispatcherWrapper$DispatcherProxy;
        }
        interface DispatcherWrapper extends CombineTypes<[_DispatcherWrapper, java.lang.Object]> {}
        interface _DispatcherWrapper$DispatcherProxy$$static extends ClassLike {
        }
        let DispatcherWrapper$DispatcherProxy: _DispatcherWrapper$DispatcherProxy$$static;
        interface _DispatcherWrapper$DispatcherProxy {
          createSecondaryLoop(): java.awt.SecondaryLoop;
          isDispatchThread(): boolean;
          scheduleDispatch(r: java.lang.Runnable): void;
          _this$0: DispatcherWrapper;
        }
        interface DispatcherWrapper$DispatcherProxy extends CombineTypes<[_DispatcherWrapper$DispatcherProxy, sun.awt.FwDispatcher, java.lang.Object]> {}
        interface _DragSourceContextWrapper$$static extends ClassLike {
          convertModifiersToDropAction(modifiers: int, supportedActions: int): int;
          new(e: java.awt.dnd.DragGestureEvent): DragSourceContextWrapper;
        }
        let DragSourceContextWrapper: _DragSourceContextWrapper$$static;
        interface _DragSourceContextWrapper {
          dragDropFinished(success: boolean, operations: int, x: int, y: int): void;
          getDragSourceContext(): java.awt.dnd.DragSourceContext;
          _getPeer(): java.awt.dnd.peer.DragSourceContextPeer;
          quitSecondaryEventLoop(): void;
          _setNativeCursor(a0: java.awt.Cursor, a1: int): void;
          _startDrag(a0: java.awt.datatransfer.Transferable, a1: long[], a2: java.util.Map<long,java.awt.datatransfer.DataFlavor>): void;
          startSecondaryEventLoop(): void;
          _dsp: DragSourceContextWrapper$DragSourceContextPeerProxy;
        }
        interface DragSourceContextWrapper extends CombineTypes<[_DragSourceContextWrapper, java.lang.Object]> {}
        interface _DragSourceContextWrapper$DragSourceContextPeerProxy$$static extends ClassLike {
          new(a0: DragSourceContextWrapper, e: java.awt.dnd.DragGestureEvent): DragSourceContextWrapper$DragSourceContextPeerProxy;
        }
        let DragSourceContextWrapper$DragSourceContextPeerProxy: _DragSourceContextWrapper$DragSourceContextPeerProxy$$static;
        interface _DragSourceContextWrapper$DragSourceContextPeerProxy {
          _dragDropFinishedCall(success: boolean, operations: int, x: int, y: int): void;
          _getDragSourceContextCall(): java.awt.dnd.DragSourceContext;
          quitSecondaryEventLoop(): void;
          _setNativeCursor(nativeCtxt: long, a1: java.awt.Cursor, c: int): void;
          _startDrag(trans: java.awt.datatransfer.Transferable, formats: long[], formatMap: java.util.Map<long,java.awt.datatransfer.DataFlavor>): void;
          startSecondaryEventLoop(): void;
          _this$0: DragSourceContextWrapper;
        }
        interface DragSourceContextWrapper$DragSourceContextPeerProxy extends CombineTypes<[_DragSourceContextWrapper$DragSourceContextPeerProxy, sun.awt.dnd.SunDragSourceContextPeer]> {}
        interface _DropTargetContextWrapper$$static extends ClassLike {
          new(): DropTargetContextWrapper;
        }
        let DropTargetContextWrapper: _DropTargetContextWrapper$$static;
        interface _DropTargetContextWrapper {
          acceptDrag(a0: int): void;
          acceptDrop(a0: int): void;
          dropComplete(a0: boolean): void;
          getDropTarget(): java.awt.dnd.DropTarget;
          getTargetActions(): int;
          getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[];
          getTransferable(): java.awt.datatransfer.Transferable;
          isTransferableJVMLocal(): boolean;
          rejectDrag(): void;
          rejectDrop(): void;
          reset(dtc: java.awt.dnd.DropTargetContext): void;
          setDropTargetContext(dtc: java.awt.dnd.DropTargetContext, dtcpw: DropTargetContextWrapper): void;
          setTargetActions(a0: int): void;
          _dcp: DropTargetContextWrapper$DropTargetContextPeerProxy;
        }
        interface DropTargetContextWrapper extends CombineTypes<[_DropTargetContextWrapper, java.lang.Object]> {}
        interface _DropTargetContextWrapper$DropTargetContextPeerProxy$$static extends ClassLike {
        }
        let DropTargetContextWrapper$DropTargetContextPeerProxy: _DropTargetContextWrapper$DropTargetContextPeerProxy$$static;
        interface _DropTargetContextWrapper$DropTargetContextPeerProxy {
          acceptDrag(dragAction: int): void;
          acceptDrop(dropAction: int): void;
          dropComplete(success: boolean): void;
          getDropTarget(): java.awt.dnd.DropTarget;
          getTargetActions(): int;
          getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[];
          getTransferable(): java.awt.datatransfer.Transferable;
          isTransferableJVMLocal(): boolean;
          rejectDrag(): void;
          rejectDrop(): void;
          setTargetActions(actions: int): void;
          _this$0: DropTargetContextWrapper;
        }
        interface DropTargetContextWrapper$DropTargetContextPeerProxy extends CombineTypes<[_DropTargetContextWrapper$DropTargetContextPeerProxy, java.awt.dnd.peer.DropTargetContextPeer, java.lang.Object]> {}
        interface _LightweightContentWrapper$$static extends ClassLike {
          new(): LightweightContentWrapper;
        }
        let LightweightContentWrapper: _LightweightContentWrapper$$static;
        interface _LightweightContentWrapper {
          addDropTarget(a0: java.awt.dnd.DropTarget): void;
          createDragGestureRecognizer<T>(a0: java.lang.Class<T>, a1: java.awt.dnd.DragSource, a2: java.awt.Component, a3: int, a4: java.awt.dnd.DragGestureListener): T;
          createDragSourceContext(a0: java.awt.dnd.DragGestureEvent): DragSourceContextWrapper;
          focusGrabbed(): void;
          focusUngrabbed(): void;
          getComponent(): javax.swing.JComponent;
          _getContent(): LightweightContentWrapper$LightweightContentProxy;
          imageBufferReset(a0: int[], a1: int, a2: int, a3: int, a4: int, a5: int): void;
          imageBufferReset(a0: int[], a1: int, a2: int, a3: int, a4: int, a5: int, a6: double, a7: double): void;
          imageReshaped(a0: int, a1: int, a2: int, a3: int): void;
          imageUpdated(a0: int, a1: int, a2: int, a3: int): void;
          maximumSizeChanged(a0: int, a1: int): void;
          minimumSizeChanged(a0: int, a1: int): void;
          paintLock(): void;
          paintUnlock(): void;
          preferredSizeChanged(a0: int, a1: int): void;
          removeDropTarget(a0: java.awt.dnd.DropTarget): void;
          _lwCnt: LightweightContentWrapper$LightweightContentProxy;
        }
        interface LightweightContentWrapper extends CombineTypes<[_LightweightContentWrapper, java.lang.Object]> {}
        interface _LightweightContentWrapper$LightweightContentProxy$$static extends ClassLike {
        }
        let LightweightContentWrapper$LightweightContentProxy: _LightweightContentWrapper$LightweightContentProxy$$static;
        interface _LightweightContentWrapper$LightweightContentProxy {
          addDropTarget(dt: java.awt.dnd.DropTarget): void;
          createDragGestureRecognizer<T>(abstractRecognizerClass: java.lang.Class<T>, ds: java.awt.dnd.DragSource, c: java.awt.Component, srcActions: int, dgl: java.awt.dnd.DragGestureListener): T;
          createDragSourceContextPeer(dge: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer;
          focusGrabbed(): void;
          focusUngrabbed(): void;
          getComponent(): javax.swing.JComponent;
          imageBufferReset(data: int[], x: int, y: int, width: int, height: int, linestride: int): void;
          imageBufferReset(data: int[], x: int, y: int, width: int, height: int, linestride: int, scaleX: double, a7: double): void;
          imageReshaped(x: int, y: int, width: int, height: int): void;
          imageUpdated(dirtyX: int, dirtyY: int, dirtyWidth: int, dirtyHeight: int): void;
          maximumSizeChanged(width: int, height: int): void;
          minimumSizeChanged(width: int, height: int): void;
          paintLock(): void;
          paintUnlock(): void;
          preferredSizeChanged(width: int, height: int): void;
          removeDropTarget(dt: java.awt.dnd.DropTarget): void;
          _this$0: LightweightContentWrapper;
        }
        interface LightweightContentWrapper$LightweightContentProxy extends CombineTypes<[_LightweightContentWrapper$LightweightContentProxy, sun.swing.LightweightContent, java.lang.Object]> {}
        interface _LightweightFrameWrapper$$static extends ClassLike {
          new(): LightweightFrameWrapper;
        }
        let LightweightFrameWrapper: _LightweightFrameWrapper$$static;
        interface _LightweightFrameWrapper {
          addWindowFocusListener(listener: java.awt.event.WindowFocusListener): void;
          createKeyEvent(lwFrame: LightweightFrameWrapper, swingID: int, swingWhen: long, a3: int, swingModifiers: int, swingKeyCode: char): java.awt.event.KeyEvent;
          createMouseEvent(lwFrame: LightweightFrameWrapper, swingID: int, swingWhen: long, a3: int, swingModifiers: int, relX: int, relY: int, absX: int, absY: int, clickCount: boolean, swingPopupTrigger: int): java.awt.event.MouseEvent;
          createMouseWheelEvent(lwFrame: LightweightFrameWrapper, swingModifiers: int, x: int, y: int, wheelRotation: int): java.awt.event.MouseWheelEvent;
          createUngrabEvent(lwFrame: LightweightFrameWrapper): java.awt.AWTEvent;
          dispose(): void;
          emulateActivation(activate: boolean): void;
          findComponentAt(cont: LightweightFrameWrapper, x: int, y: int, ignoreEnabled: boolean): java.awt.Component;
          _getLightweightFrame(): sun.swing.JLightweightFrame;
          isCompEqual(c: java.awt.Component, lwFrame: LightweightFrameWrapper): boolean;
          notifyDisplayChanged(scaleFactor: int): void;
          notifyDisplayChanged(scaleFactorX: double, a1: double): void;
          _overrideNativeWindowHandle(handle: long, a1: java.lang.Runnable): void;
          setBounds(x: int, y: int, w: int, h: int): void;
          setContent(lwCntWrapper: LightweightContentWrapper): void;
          setHostBounds(x: int, y: int, w: int, h: int): void;
          setVisible(visible: boolean): void;
          _lwFrame: sun.swing.JLightweightFrame;
        }
        interface LightweightFrameWrapper extends CombineTypes<[_LightweightFrameWrapper, java.lang.Object]> {}
        interface _SwingInterOpUtils$$static extends ClassLike {
          grab(toolkit: java.awt.Toolkit, window: java.awt.Window): void;
          isUngrabEvent(e: java.awt.AWTEvent): boolean;
          postEvent(target: any, e: java.awt.AWTEvent): void;
          ungrab(toolkit: java.awt.Toolkit, window: java.awt.Window): void;
          readonly GRAB_EVENT_MASK: int;
          new(): SwingInterOpUtils;
        }
        let SwingInterOpUtils: _SwingInterOpUtils$$static;
        interface _SwingInterOpUtils {
        }
        interface SwingInterOpUtils extends CombineTypes<[_SwingInterOpUtils, java.lang.Object]> {}
      }
    }
  }
}
