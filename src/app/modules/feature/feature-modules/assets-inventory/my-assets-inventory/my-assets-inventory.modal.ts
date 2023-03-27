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
      title: 'Asset Name',
      id: 'asset_name',
      sorting: false,
      templateBy: 'asset_name',
    },
    {
      title: 'Assets Category',
      id: 'assets_category',
      sorting: false,
      templateBy: 'assets_category',
    },
    {
      title: 'Company Asset Code',
      id: 'company_asset_code',
      sorting: false,
      templateBy: 'company_asset_code',
    },
    {
      title: 'brand',
      id: 'brand',
      sorting: false,
      templateBy: 'company',
    },
    {
      title: 'Serial No',
      id: 'serial_no',
      sorting: false,
      templateBy: 'serial_no',
    },
    {
      title: 'Model',
      id: 'model',
      sorting: false,
      templateBy: 'model',
    },
    {
      title: 'Is working',
      id: 'is_working',
      sorting: false,
      templateBy: 'is_working',
    },
    {
      title: 'Company',
      id: 'company',
      sorting: false,
      templateBy: 'company',
    }
  ];
  options: Table.Options = {
    selection: false,
  };
  constructor(public data: any[]) {}
}
