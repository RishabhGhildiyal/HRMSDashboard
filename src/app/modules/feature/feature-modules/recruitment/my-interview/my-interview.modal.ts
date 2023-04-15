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
      title: 'S.No.',
      id: 'sn',
      resolve: (row: any) => row['sn'],
    },
    {
      title: 'Department',
      id: 'department_name',
      sorting: false,
      templateBy: 'department_name',
    },
    {
      title: 'Name',
      id: 'name',
      sorting: false,
      templateBy: 'name',
    },

    {
      title: 'Email',
      id: 'email',
      sorting: false,
      templateBy: 'email',
    },
    {
      title: 'Mobile No',
      id: 'mobile_no',
      sorting: false,
      templateBy: 'mobile_no',
    },

    {
      title: 'round type',
      id: 'round_type',
      sorting: false,
      templateBy: 'round_type',
    },
    {
      title: 'interview date',
      id: 'interview_date',
      sorting: false,
      templateBy: 'interview_date',
    },
    {
      title: 'interview time',
      id: 'interview_time',
      sorting: false,
      templateBy: 'interview_time',
    },
    {
      title: 'final status',
      id: 'final_status',
      sorting: false,
      templateBy: 'final_status',
    },
    {
      title: 'Actions',
      id: 'actions',
      sorting: false,
      templateBy: 'actions',
    },
  ];
  options: Table.Options = {
    selection: false,
  };
  constructor(public data: any[]) {}
}
