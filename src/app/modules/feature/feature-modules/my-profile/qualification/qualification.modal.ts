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
  total: 10,
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
        id: "schoolUni",
        sorting: false,
        templateBy: "schoolUni",
      },
      {
        title: "Time Period",
        id: "time",
        sorting: false,
        templateBy: "time"
      },
      {
        title: "professional Course",
        id: "professionalCourse",
        sorting: false,
        templateBy: "professionalCourse"
      },


    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
