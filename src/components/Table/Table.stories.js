import React from 'react';
import makeData from '../../utils/makeData';
import { Table } from '../Table';


export default {
  title: 'Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
const columns = [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'First Name',
          accessor: 'firstName',
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
        },
      ],
    },
    {
      Header: 'Info',
      columns: [
        {
          Header: 'Age',
          accessor: 'age',
        },
        {
          Header: 'Visits',
          accessor: 'visits',
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
        {
          Header: 'Profile Progress',
          accessor: 'progress',
        },
      ],
    },
  ]
const data = makeData(20)

const Template = (args) => <Table {...args} />;

export const SimpleTable = Template.bind({});

SimpleTable.args = {
  data,
  columns
};



export const TableWithSoring = Template.bind({});

TableWithSoring.args = {
  data,
  columns,
  enableSorting: true
};


export const TableWithResizing = Template.bind({});

TableWithResizing.args = {
  data,
  columns,
  enableResizing: true
};




export const TableWithColumnReordering = Template.bind({});

TableWithColumnReordering.args = {
  data,
  columns,
  showColumnDraggingOption: true
};


export const CompleteTable = Template.bind({});

CompleteTable.args = {
  data,
  columns,
  enableResizing: true,
  enableSorting: true,
  showColumnDraggingOption: true,
  enablePagination: true
};
