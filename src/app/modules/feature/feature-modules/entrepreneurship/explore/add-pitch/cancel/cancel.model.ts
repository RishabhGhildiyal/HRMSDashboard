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
      title: '#',
      id: 'sn',
      resolve: (row: any) => row['sn'],
    },
    {
      title: 'Title',
      id: 'title',
      sorting: false,
      templateBy: 'title',
    },
    {
      title: 'Industry',
      id: 'industry',
      sorting: false,
      templateBy: 'industry',
    },

    {
      title: 'Technical/ Non-Technical',
      id: 'tech_nontech',
      sorting: false,
      templateBy: 'tech_nontech',
    },
    {
      title: 'Submitted On',
      id: 'submitted_on',
      sorting: false,
      templateBy: 'submitted_on',
    },

    {
      title: 'Action',
      id: 'action',
      sorting: false,
      templateBy: 'action',
    }
  ];
  options: Table.Options = {
    selection: false,
  };
  constructor(public data: any[]) {}
}
