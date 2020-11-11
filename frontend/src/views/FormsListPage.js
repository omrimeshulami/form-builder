import React, { useEffect } from "react";
import { Table, Button } from "evergreen-ui";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { delete_form, fetch_forms } from "../actions/FormsListActions";

function FormsListPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    // useEffect == get the info before the page render
    dispatch(fetch_forms());
  }, []);
  const list = useSelector((state) => state.formList);

  return (
    <div>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Form Id</Table.TextHeaderCell>
          <Table.TextHeaderCell>Form Name</Table.TextHeaderCell>
          <Table.TextHeaderCell>#Submmisions</Table.TextHeaderCell>
          <Table.TextHeaderCell>Submit Page</Table.TextHeaderCell>
          <Table.TextHeaderCell>Submissions Page</Table.TextHeaderCell>
          <Table.TextHeaderCell>remove form</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body>
          {list.map((item) => (
            <Table.Row key={item._id}>
              <Table.Cell>{item._id}</Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.submissionsNumber}</Table.Cell>
              <Table.Cell>
                <Link
                  to={{
                    pathname: `/submitSubForForm/${item._id}`,
                    aboutProps: { form: item },
                  }}
                  className="text-blue-500"
                >
                  submit
                </Link>
              </Table.Cell>

              <Table.Cell>
                <Link
                  to={{
                    pathname: `/retrieveFormSubsById/${item._id}`,
                    aboutProps: { id: item._id },
                  }}
                  className="text-blue-500"
                >
                  subs
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button
                  appearance={"primary"}
                  intent="danger"
                  onClick={() => {
                    dispatch(delete_form(item._id));
                  }}
                >
                  delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default FormsListPage;
