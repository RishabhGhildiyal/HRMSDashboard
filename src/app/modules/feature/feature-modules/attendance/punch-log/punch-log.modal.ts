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
        title: "Name",
        id: "name",
        sorting: false,
        templateBy: "name",
      },
      {
        title: "Punch Time",
        id: "punch_time",
        sorting: false,
        templateBy: "punch_time",
      },
      {
        title: "Direction",
        id: "direction",
        sorting: false,
        templateBy: "direction"
      },
      // {
      //   title: "Trainer Email",
      //   id: "trainer_email	",
      //   sorting: false,
      //   templateBy: "trainer_email"
      // },
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
