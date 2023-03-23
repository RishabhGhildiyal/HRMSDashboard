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
        title: "Training Name",
        id: "training_name",
        sorting: false,
        templateBy: "training_name",
      },
      {
        title: "Timeline to conduct	",
        id: "timeline_to_conduct	",
        sorting: false,
        templateBy: "timeline_to_conduct"
      },
      {
        title: "Requested date",
        id: "requested_date	",
        sorting: false,
        templateBy: "requested_date"
      },
      {
        title: "Status",
        id: "status",
        sorting: false,
        templateBy: "status"
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
