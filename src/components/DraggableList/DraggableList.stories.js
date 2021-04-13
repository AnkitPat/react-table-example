import React from 'react';
import DraggableList from '.';


export default {
  title: 'DraggableList',
  component: DraggableList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <DraggableList {...args} />;

export const SimpleDraggableList = Template.bind({});

SimpleDraggableList.args = {
  list: [
    {
      id: '1',
      Header: 'Check1'
    },
    {
      id: '2',
      Header: 'Check2'
    }
  ],
  onListUpdated: () => {},
};

export const DraggableListWithHeader = Template.bind({});
DraggableListWithHeader.args = {
  headerTitle: 'Here is header',
  list: [
    {
      id: '1',
      Header: 'WithHeader1'
    },
    {
      id: '2',
      Header: 'WithHeader2'
    }
  ],
  onListUpdated: () => {},
  listItemStyle: {backgroundColor: 'red'}

};

export const DraggableListWithHeaderAndListColor = Template.bind({});

DraggableListWithHeaderAndListColor.args = {
  headerTitle: 'Here is header',
  list: [
    {
      id: '1',
      Header: 'WithHeaderAndListColor1'
    },
    {
      id: '2',
      Header: 'WithHeaderAndListColor2'
    }
  ],
  onListUpdated: () => {},
  listItemStyle: {backgroundColor: 'red'}

};



export const DraggableListWithListItemStyling = Template.bind({});

DraggableListWithListItemStyling.args = {
  headerTitle: 'Here is header',
  list: [
    {
      id: '1',
      Header: 'Complete1'
    },
    {
      id: '2',
      Header: 'Complete2'
    }
  ],
  onListUpdated: () => {},
  listItemStyle: {backgroundColor: 'green', color: 'black', fontSize: 33}

};
