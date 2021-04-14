import Pagination from '.';
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";


storiesOf("Pagination", module).add("Pagination with zero pages", () => {
  const [page, setPage] = React.useState(0);
  return (
    <Pagination canPreviousPage={page !== 0} canNextPage={false} nextPage={() => setPage(page + 1)} previousPage={() => setPage(page - 1)} pageIndex={page} pageOptions={{ length: 0 }}>

    </Pagination>
  );
})

storiesOf('Pagination')
  .add("Pagination with pages at first page", () => {
    const [page, setPage] = React.useState(0);
    return (
      <Pagination canPreviousPage={page !== 0} canNextPage={page !== 9} nextPage={() => setPage(page + 1)} previousPage={() => setPage(page - 1)} pageIndex={page} pageOptions={{ length: 10 }}>

      </Pagination>
    );
  });


storiesOf('Pagination')
  .add("Pagination with pages at mid", () => {
    const [page, setPage] = React.useState(4);
    return (
      <Pagination canPreviousPage={page !== 0} canNextPage={page !== 9} nextPage={() => setPage(page + 1)} previousPage={() => setPage(page - 1)} pageIndex={page} pageOptions={{ length: 10 }}>

      </Pagination>
    );
  });