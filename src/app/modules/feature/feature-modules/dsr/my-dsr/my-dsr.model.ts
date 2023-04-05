import { Table } from "src/app/modules/common/common-table/table.types";
export const MYDSR_LIST_CONFIG = {
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

export class MyDsrTableDataSource implements Table.Source<any> {
    columns: Table.Column<any>[] = [
      {
        title: "S.No.",
        id: "sn",
        resolve: (row: any) => row["sn"],
      },
      {
        title: "Name",
        id: "name",
        sorting: false,
        templateBy: "name",
      },
      {
        title: "Type",
        id: "type",
        sorting: false,
        templateBy: "type"
      },
      {
        title: "File Size",
        id: "file_size",
        sorting: false,
        templateBy: "file_size"
      },
      {
        title: "Last Modifed",
        id: "last_modified",
        sorting: false,
        templateBy: "last_modified"
      },
      {
        title:'Actions',
        id:'actions',
        sorting:false,
        templateBy:'actions'
      }
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
