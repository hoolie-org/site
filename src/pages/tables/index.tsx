import React from "react";
import Table from "../../components/Table";

export default function TablesPage() {
  // Render
  return (
    <div className="TablesPage">
      <h1>Regular table</h1>

      <Table
        headers={["#", "First Name", "Last Name", "Gender", "E-Mail"]}
        data={[
          ["1", "Alex", "Congritta", "Male", "congritta@gmail.com"],
          [
            "2",
            <span key="1">John</span>,
            <div key="1">Doe</div>,
            "Male",
            "doe@example.com"
          ],
          [
            "3",
            "Alex",
            "Congritta",
            "Male",
            <a
              key="1"
              href="mailto:congritta@gmail.com"
            >
              congritta@gmail.com
            </a>
          ],
          ["4", "Alex", "Congritta", "Male", "congritta@gmail.com"],
          ["5", "Alex", "Congritta", "Male", "congritta@gmail.com"]
        ]}
      />
    </div>
  );
}
