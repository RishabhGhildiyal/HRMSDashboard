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
      title: 'Employee Id',
      id: 'employee_id',
      sorting: false,
      templateBy: 'employee_id',
    },
    {
      title: 'Unique Asset Code',
      id: 'unique_asset_code',
      sorting: false,
      templateBy: 'unique_asset_code',
    },
    {
      title: 'Serial Number',
      id: 'serial_number',
      sorting: false,
      templateBy: 'serial_number',
    },
    {
      title: 'Model Number',
      id: 'model_number',
      sorting: false,
      templateBy: 'model_number',
    },
    {
      title: 'OS',
      id: 'os',
      sorting: false,
      templateBy: 'os',
    },
    {
      title: 'OS Version',
      id: 'os_version',
      sorting: false,
      templateBy: 'os_version',
    },
    {
      title: 'Brand',
      id: 'brand',
      sorting: false,
      templateBy: 'brand',
    },
    {
      title: 'Colour',
      id: 'colour',
      sorting: false,
      templateBy: 'colour',
    },
    {
      title: 'Images',
      id: 'images',
      sorting: false,
      templateBy: 'images',
    },
    {
      title: 'Is Working?',
      id: 'is_working',
      sorting: false,
      templateBy: 'is_working',
    },
    {
      title: 'Added',
      id: 'added',
      sorting: false,
      templateBy: 'added',
    },
  ];
  options: Table.Options = {
    selection: false,
  };
  constructor(public data: any[]) {}
}
