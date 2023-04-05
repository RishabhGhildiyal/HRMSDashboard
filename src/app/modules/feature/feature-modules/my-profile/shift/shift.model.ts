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
    // {
    //   title: 'S.No.',
    //   id: 'sn',
    //   resolve: (row: any) => row['sn'],
    // },
    {
      title: 'Date Of Joining',
      id: 'date_of_joining',
      sorting: false,
      templateBy: 'date_of_joining',
    },
    {
      title: 'Office Shift',
      id: 'office_shift',
      sorting: false,
      templateBy: 'office_shift',
    },
  ];
  options: Table.Options = {
    selection: false,
  };
  constructor(public data: any[]) {}
}
