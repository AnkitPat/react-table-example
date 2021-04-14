import React from 'react';
import { Table } from './components/Table';
import moment from 'moment';
import './App.css';
import { API_BASE_URL } from './components/constants';

function App() {
  const [data ,setData] = React.useState([]);

  React.useEffect(() => {
    fetch(API_BASE_URL + 'api/transactions', { method: "GET" }).then(async value => {
      const transactionData = await value.json();
      setData(transactionData.transactions)
    })
  }, [])

 

  const columns = React.useMemo(
    () => [
      {
        Header: 'Text',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Ticket Ref',
            accessor: 'ticketref',
          },
        ],
      },
      {
        Header: 'Date',
        columns: [
          {
            Header: 'Trade Date',
            accessor: data => {
              return moment(data.traded_on, 'DD-MM-yyyy')
                .format("DD/MM/YYYY")
            },
            sortType: (a, b) => {
              if (moment(a) > moment(b)) return 1
              else if (moment(a) < moment(b)) return -1;
              else return 0;
            }
          }
        ],
      },
      {
        Header: 'Amount',
        columns: [
          {
            Header: 'Quantity',
            accessor: 'quantity',
          },
          {
            Header: 'Currency',
            accessor: 'currency',
          },
          {
            Header: 'Settlement Amount',
            accessor: 'settlement_amount',
          }
        ],
      },
    ],
    []
  )

  return (
    <>
      <Table columns={columns} data={data}  enableResizing={true} enablePagination={data.length > 0} enableSorting={true} showColumnDraggingOption={true}/>
    </>
  );
}

export default App;
