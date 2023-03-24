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
        title: "S.No.",
        id: "sn",
        resolve: (row: any) => row["sn"],
      },
      {
        title: "Topic",
        id: "topic",
        sorting: false,
        templateBy: "topic",
      },
      {
        title: "Date",
        id: "date",
        sorting: false,
        templateBy: "date"
      },
      {
        title: "Attendance",
        id: "attendance	",
        sorting: false,
        templateBy: "attendance"
      }
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
