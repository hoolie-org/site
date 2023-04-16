import React, {useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import Checkbox from "../../components/Checkbox";
import ModalWindow from "../../components/ModalWindow";

export default function ModalsPage() {
  // State
  const [modalWindowState, setModalWindowState] = useState({
    isShown: false,
    title: "My popup title",
    contents: `CRA Scaffold is awesome!`,
    canClose: true
  });

  // Render
  return (
    <div className="ModalsPage">
      <h1>Modal window constructor</h1>

      <hr />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setModalWindowState({...modalWindowState, isShown: true});
        }}
      >
        <div className="field-wrapper">
          <div className="label">Modal window title</div>
          <input
            type="text"
            value={modalWindowState.title}
            onChange={({target: {value}}) =>
              setModalWindowState({...modalWindowState, title: value})
            }
          />
        </div>

        <div className="field-wrapper">
          <div className="label">User can close modal window</div>
          <Checkbox
            isActive={modalWindowState.canClose}
            onTriggered={() =>
              setModalWindowState({
                ...modalWindowState,
                canClose: !modalWindowState.canClose
              })
            }
          />
        </div>

        <div className="field-wrapper">
          <div className="label">Modal window contents</div>
          <TextareaAutosize
            minRows={3}
            value={modalWindowState.contents}
            onChange={({target: {value}}) =>
              setModalWindowState({...modalWindowState, contents: value})
            }
          />
        </div>

        <div className="field-wrapper">
          <button className="is-auto-width">Create modal window</button>
        </div>
      </form>

      <ModalWindow
        isShown={modalWindowState.isShown}
        title={modalWindowState.title}
        onClose={
          modalWindowState.canClose
            ? () => setModalWindowState({...modalWindowState, isShown: false})
            : // eslint-disable-next-line no-undefined
            undefined
        }
      >
        <div>{modalWindowState.contents}</div>
        {!modalWindowState.canClose ? (
          <>
            <hr />
            <p>This modal window is not closable</p>
            <br />
            <button
              className="is-auto-width"
              onClick={() =>
                setModalWindowState({...modalWindowState, isShown: false})
              }
            >
              Close popup
            </button>
          </>
        ) : null}
      </ModalWindow>
    </div>
  );
}
