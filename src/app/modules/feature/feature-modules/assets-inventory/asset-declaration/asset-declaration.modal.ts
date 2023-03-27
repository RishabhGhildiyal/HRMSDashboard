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
      title: 'Status',
      id: 'status',
      sorting: false,
      templateBy: 'status',
    },
    {
      title: 'Request Reason',
      id: 'request_reason',
      sorting: false,
      templateBy: 'request_reason',
    },
    {
      title: 'Priority',
      id: 'priority',
      sorting: false,
      templateBy: 'priority',
    },
    {
      title: 'Requested At',
      id: 'requested_at',
      sorting: false,
      templateBy: 'requested_at',
    },
    {
      title: 'Assets Category',
      id: 'assets_category',
      sorting: false,
      templateBy: 'assets_category',
    },
    {
      title: 'Allocation Type',
      id: 'allocation_type',
      sorting: false,
      templateBy: 'allocation_type',
    },
    {
      title: 'Company',
      id: 'company',
      sorting: false,
      templateBy: 'company',
    },
  ];
  options: Table.Options = {
    selection: false,
  };
  constructor(public data: any[]) {}
}
