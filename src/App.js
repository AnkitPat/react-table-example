import React from 'react';
import { Table } from './components/Table';
import moment from 'moment';
import './App.css';

function App() {
  const [data ,setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://canopy-frontend-task.vercel.app/api/transactions', { method: "GET" }).then(async value => {
      const transactionData = await value.json();
      setData(transactionData.transactions)
    })
  }, [])

 



  return (
    <>
      <Table columns={columns} data={data}  enableResizing={true} enablePagination={data.length > 0} enableSorting={true} showColumnDraggingOption={true}/>
    </>
  );
}

export default App;
