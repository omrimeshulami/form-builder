import React, { useEffect, useState } from "react";
import { Table } from "evergreen-ui";
import axios from "axios";

function FormSubs(props) {
  const [form, setForm] = useState({ data: [[]] });
  useEffect(() => {
    // useEffect == get the info before the page render
    axios
      .get(
        `/retrieveFormSubsById/${props.location.pathname.slice(
          props.location.pathname.lastIndexOf("/") + 1
        )}`
      ) //for the id
      .then((response) => {
        console.log(response);
        setForm({ ...form, data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(form.data[0]);
  return (
    <div>
      <Table>
        <Table.Head>
          {form.data[0].map((item) => (
            <Table.TextHeaderCell key={item.fieldLabel}>
              {item.fieldLabel}
            </Table.TextHeaderCell>
          ))}
        </Table.Head>
        <Table.Body>
          {form.data.map((row) => (
            <Table.Row>
              {row.map((field) => (
                <Table.Cell key={field.fieldLabel}>{field.value}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default FormSubs;
