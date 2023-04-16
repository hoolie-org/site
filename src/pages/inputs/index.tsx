import React, {useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import Checkbox from "../../components/Checkbox";
import Icon from "../../components/Icon";
import MenuFrom from "../../components/MenuFrom";
import Radiobox from "../../components/Radiobox";
import Range from "../../components/Range";
import Select from "../../components/Select";

export default function InputsPage() {
  // State
  const [options, setOptions] = useState([true, false, false, true, false]);
  const [selectedOption, setSelectedOption] = useState<"1" | "2" | "3">("1");
  const [ranges, setRanges] = useState<[[number], [number, number]]>([
    [100],
    [100, 300]
  ]);

  // Render
  return (
    <div className="InputsPage">
      <h2>Buttons</h2>

      <p>
        There are buttons. You can view CSS classes in code and combine them as
        you want
      </p>

      <div className="field-wrapper">
        <button>Simple button</button>
      </div>

      <div className="field-wrapper">
        <button>Autowidthed button</button>

        <button className="is-auto-width">
          <Icon icon="favorite-1" />
          <span>Iconed button</span>
        </button>

        <button className="is-auto-width">
          <Icon icon="favorite-1" />
        </button>

        <button className="is-zeroed">Zeroed button</button>

        <button
          className="is-auto-width"
          disabled={true}
        >
          Disabled button
        </button>
      </div>

      <hr />

      <h2>Inputs</h2>

      <div className="field-wrapper">
        <input
          type="text"
          placeholder="Simple text input"
        />
        <input
          type="text"
          defaultValue="Readonly input"
          readOnly={true}
        />
      </div>

      <div className="field-wrapper">
        <div className="label">Label for input</div>

        <input
          type="text"
          placeholder="Labelled input"
        />
      </div>

      <div className="field-wrapper">
        <div className="label">Multiline text input</div>

        <TextareaAutosize
          minRows={3}
          maxRows={10}
        />
      </div>

      <div className="field-wrapper">
        <div className="label">Checkboxes</div>

        <div className="field-wrapper">
          <Checkbox
            isActive={options[0]}
            contents="Option 1"
            onTriggered={() => setOptions({...options, [0]: !options[0]})}
          />
          <Checkbox
            isActive={options[1]}
            contents={<a>Any element here</a>}
            onTriggered={() => setOptions({...options, [1]: !options[1]})}
          />
          <Checkbox
            isActive={options[2]}
            onTriggered={() => setOptions({...options, [2]: !options[2]})}
          />
        </div>
      </div>

      <div className="field-wrapper">
        <div className="label">Radioboxes</div>

        <div className="field-wrapper">
          <Radiobox
            isActive={options[0]}
            contents="Option 1"
            onTriggered={() => setOptions({...options, [0]: true, [1]: false})}
          />
          <Radiobox
            isActive={options[1]}
            contents={<a>Any element here. Option 2</a>}
            onTriggered={() => setOptions({...options, [0]: false, [1]: true})}
          />
        </div>
      </div>

      <div className="field-wrapper">
        <div className="label">
          Ranges {ranges[0]} / {ranges[1][0]}, {ranges[1][1]}
        </div>

        <Range
          values={ranges[0]}
          onChange={(values) => setRanges([values as [number], ranges[1]])}
          min={0}
          max={1000}
        />
        <Range
          values={ranges[1]}
          onChange={(values) =>
            setRanges([ranges[0], values as [number, number]])
          }
          min={0}
          max={1000}
        />
      </div>

      <div className="field-wrapper">
        <div className="label">Menus</div>

        <div className="field-wrapper">
          <MenuFrom
            options={[
              {value: "1", element: "Item 1"},
              {value: "2", element: "Item 2"},
              {value: "3", element: "Item 3"}
            ]}
          >
            <button className="is-auto-width">Menu from button</button>
          </MenuFrom>

          <MenuFrom
            options={[
              {
                value: "1",
                element: (
                  <button className="is-zeroed">
                    <Icon icon="heart-lined" />
                    <span>Iconed element 1</span>
                  </button>
                )
              },
              {
                value: "2",
                element: (
                  <button className="is-zeroed">
                    <Icon icon="heart-lined" />
                    <span>Iconed element 2</span>
                  </button>
                )
              },
              {
                value: "3",
                element: (
                  <button className="is-zeroed">
                    <Icon icon="heart-lined" />
                    <span>Iconed element 3</span>
                  </button>
                )
              }
            ]}
          >
            <button className="is-auto-width">Iconed elements</button>
          </MenuFrom>

          <Select
            isAutoWidth={true}
            value={selectedOption}
            options={[
              {value: "1", element: "Item 1"},
              {value: "2", element: "Item 2"},
              {value: "3", element: "Item 3"}
            ]}
            onTriggered={(value: typeof selectedOption) =>
              setSelectedOption(value)
            }
          />
        </div>
      </div>
    </div>
  );
}
