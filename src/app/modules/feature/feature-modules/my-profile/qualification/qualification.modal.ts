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
        title:'Action',
        id:'actions',
        sorting:false,
        templateBy:'actions'
      },
      {
        title: "School / University",
        id: "Amity_University",
        sorting: false,
        templateBy: "Amity_University",
      },
      {
        title: "Time Period",
        id: "time_period",
        sorting: false,
        templateBy: "time_period"
      },
      {
        title: "Educational Level",
        id: "educational_level",
        sorting: false,
        templateBy: "educational_level"
      },


    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
