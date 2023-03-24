import { Table } from "src/app/modules/common/common-table/table.types";
export const DOCUMENTS_LIST_CONFIG = {
  label: "Users Management",
  options: {
    search: true,
    pagination: true,
    // filter: UserListFilterComponent,
    searchPlaceholder: "Search by name, email",
    addButton: true,
    ButtonDetails: {
      icon: "download",
      buttonName: "Download Report",
    },
  },
  total: 0,
};

export class UserTableDataSource implements Table.Source<any> {
    columns: Table.Column<any>[] = [
      {
        title: "Asset Name",
        id: "asset_name",
        sorting: false,
        templateBy: "asset_name",
      },
      {
        title: "Assets Category",
        id: "assets_category	",
        sorting: false,
        templateBy: "assets_category"
      },
      {
        title: "Company Asset Code",
        id: "company_asset_code	",
        sorting: false,
        templateBy: "company_asset_code"
      },
      {
        title: "Brand",
        id: "brand",
        sorting: false,
        templateBy: "brand"
      },
      {
        title:'Serial No.',
        id:'serial_no',
        sorting:false,
        templateBy:'serial_no'
      },
      {
        title:'Model',
        id:'model',
        sorting:false,
        templateBy:'model'
      },
      {
        title:'Is working?',
        id:'is_working',
        sorting:false,
        templateBy:'is_working?'
      },
      {
        title:'Company',
        id:'company',
        sorting:false,
        templateBy:'company'
      },
      {
        title:'Status',
        id:'status',
        sorting:false,
        templateBy:'status'
      },
      {
        title:'Request Reason',
        id:'request_reason',
        sorting:false,
        templateBy:'request_reason'
      },
      {
        title:'Priority',
        id:'priority',
        sorting:false,
        templateBy:'priority'
      },
      {
        title:'Requested At',
        id:'requested_at',
        sorting:false,
        templateBy:'requested_at'
      },
      {
        title:'Assets Category',
        id:'assets_category',
        sorting:false,
        templateBy:'assets_category'
      },
      {
        title:'Allocation Type',
        id:'allocation_type',
        sorting:false,
        templateBy:'allocation_type'
      },
      // {
      //   title:'Assets Category',
      //   id:'assets_category',
      //   sorting:false,
      //   templateBy:'assets_category'
      // }
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
