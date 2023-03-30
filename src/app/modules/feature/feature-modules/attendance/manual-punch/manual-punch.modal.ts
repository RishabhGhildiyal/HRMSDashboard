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
      // {
      //   title: "S.No.",
      //   id: "sn",
      //   resolve: (row: any) => row["sn"],
      // },
      {
        title: "Edit",
        id: "edit",
        sorting: false,
        templateBy: "edit",
      },
      {
        title: "Manual Punch Date",
        id: "manual_punch_date",
        sorting: false,
        templateBy: "manual_punch_date",
      },
      {
        title: "In Time",
        id: "in_time",
        sorting: false,
        templateBy: "in_time"
      },
      {
        title: " Out Time",
        id: "out_time	",
        sorting: false,
        templateBy: "out_time"
      },
      // {
      //   title: "Start Date",
      //   id: "start_date",
      //   sorting: false,
      //   templateBy: "start_date"
      // },
      // {
      //   title:'End Date',
      //   id:'end_date',
      //   sorting:false,
      //   templateBy:'end_date'
      // },
      // {
      //   title:'Resource URL',
      //   id:'resource_url',
      //   sorting:false,
      //   templateBy:'resource_url'
      // }
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
