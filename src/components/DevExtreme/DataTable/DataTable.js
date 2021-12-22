import React, { useEffect } from "react";

import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Form,
} from "devextreme-react/data-grid";
import "devextreme-react/text-area";
import { Item } from "devextreme-react/form";
import { employees, states } from "./data.js";
import { Dropzone } from "../DropZone/index.js";
import moment from "moment";

const notesEditorOptions = { height: 100 };

export const DataTable = (props) => {
  const { data,onRowInserted } = props;
  const [tableData, setTableData] = React.useState([]);

  useEffect(() => {
    const newData = data?.map((product) => ({ ID: product._id, ...product }));
    setTableData(newData);
  }, []);

  const onRowRemoving = () => {};

  return (
    <div id="data-grid-demo">
      <DataGrid
        dataSource={tableData}
        keyExpr="ID"
        showBorders={false}
        onColumnsChange={(data) => console.log(data)}
        onRowRemoving={(e) => console.log(e)}
        onRowUpdated={(e) => console.log(e)}
        onRowInserted={(e)=> onRowInserted(e.data)}
      >
        <Paging enabled={true} />
        <Editing
          mode="popup"
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
        >
          <Popup
            title="Ürün Bilgileri"
            showTitle={true}
            width={700}
            height={525}
          />
          <Form>
            <Item
              style={{ border: "2px solid red", height: 200 }}
              colCount={2}
              colSpan={2}
            >
              <Dropzone />
            </Item>
            <Item
              dataField="description"
              editorType="dxTextArea"
              colSpan={2}
              editorOptions={{width:'100%'}}
            />
            <Item dataField="title" />
            <Item dataField="price" />
            <Item dataField="price_with_discount" />
           
            {/* <Item dataField="Position" />
            <Item dataField="HireDate" />
         
            <Item
              dataField="Notes"
              editorType="dxImageUpload"
              colSpan={2}
              editorOptions={notesEditorOptions}
            ></Item>

            <Item
              itemType="group"
              caption="Home Address"
              colCount={2}
              colSpan={2}
            >
              <Item dataField="StateID" />
              <Item dataField="Address" />
            </Item> */}
          </Form>
        </Editing>
        {Object.keys(data[0] || []).map((key) =>
          !key.startsWith("_") ? (
            <Column key={key} dataField={key} />
          ) : key === "_id" ? (
            <Column key={key} dataField={"ID"} visible={false} />
          ) : null
        )}
      </DataGrid>
    </div>
  );
};
