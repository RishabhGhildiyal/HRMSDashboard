import { Table } from "src/app/modules/common/common-table/table.types";
export const DSRDETAILS_LIST_CONFIG = {
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

export class dsrdetailsTableDataSource implements Table.Source<any> {
    columns: Table.Column<any>[] = [
      {
        title: "S.No.",
        id: "sn",
        resolve: (row: any) => row["sn"],
      },
      {
        title: "Project Name",
        id: "project_name",
        sorting: false,
        templateBy: "project_name",
      },
      {
        title: "Dsr",
        id: "dsr",
        sorting: false,
        templateBy: "dsr"
      },
      {
        title: "Status",
        id: "status",
        sorting: false,
        templateBy: "status"
      },
      {
        title: "PM Approval",
        id: "pm_approval",
        sorting: false,
        templateBy: "pm_approval"
      },
      {
        title:'AM Approval',
        id:'am_approval',
        sorting:false,
        templateBy:'am_approval'
      },
      {
        title:'RM Approval',
        id:'rm_approval',
        sorting:false,
        templateBy:'rm_approval'
      },
      {
        title:'Final Approval',
        id:'final_Approval',
        sorting:false,
        templateBy:'final_Approval'
      },
      {
        title:'Logged Hrs',
        id:'logged_hrs',
        sorting:false,
        templateBy:'logged_hrs'
      },
      {
        title:'Action',
        id:'action',
        sorting:false,
        templateBy:'action'
      }
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
