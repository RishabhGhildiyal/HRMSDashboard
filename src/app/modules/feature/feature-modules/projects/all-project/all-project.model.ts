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
      title: 'Project Title',
      id: 'project_name',
      sorting: false,
      templateBy: 'project_name',
    },
    {
      title: 'Leave Type',
      id: 'leave_type',
      sorting: false,
      templateBy: 'leave_type',
    },

    {
      title: 'Request From',
      id: 'request_from',
      sorting: false,
      templateBy: 'request_from',
    },
    {
      title: 'Request To',
      id: 'request_to',
      sorting: false,
      templateBy: 'request_to',
    },

    {
      title: 'Applied On',
      id: 'applied_on',
      sorting: false,
      templateBy: 'applied_on',
    },
    {
      title: 'Status',
      id: 'status',
      sorting: false,
      templateBy: 'status',
    },
    {
      title: 'Level 1',
      id: 'level_1',
      sorting: false,
      templateBy: 'level_1',
    },
    {
      title: 'Level 2',
      id: 'level_2',
      sorting: false,
      templateBy: 'level_2',
    },
    // {
    //   title: 'Actions',
    //   id: 'actions',
    //   sorting: false,
    //   templateBy: 'actions',
    // },
  ];
  options: Table.Options = {
    selection: false,
  };
  constructor(public data: any[]) {}
}
