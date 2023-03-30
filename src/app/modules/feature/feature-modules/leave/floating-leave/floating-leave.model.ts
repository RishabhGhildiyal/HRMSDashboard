import { Table } from 'src/app/modules/common/common-table/table.types';
export const DOCUMENTS_LIST_CONFIG = {
  label: 'Users Management',
  options: {
    search: true,
    pagination: true,
    // filter: UserListFilterComponent,
    searchPlaceholder: 'Search by name, email',
    addButton: true,
    ButtonDetails: {
      icon: 'download',
      buttonName: 'Download Report',
    },
  },
  total: 0,
};

export class UserTableDataSource implements Table.Source<any> {
  columns: Table.Column<any>[] = [
    {
      title: 'Sr No',
      id: 'sn',
      sorting: false,
      templateBy: 'sn',
    },
    {
      title: 'Event Name',
      id: 'event_name',
      sorting: false,
      templateBy: 'event_name',
    },
    {
      title: 'Date',
      id: 'date',
      sorting: false,
      templateBy: 'date',
    },
  ];
  options: Table.Options = {
    selection: false,
  };
  constructor(public data: any[]) {}
}
