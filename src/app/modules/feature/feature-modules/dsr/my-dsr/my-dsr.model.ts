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
        title: "Emp Name",
        id: "employee_name",
        sorting: false,
        templateBy: "employee_name",
      },
      {
        title: "Emp Id",
        id: "employee_id",
        sorting: false,
        templateBy: "employee_id"
      },
      {
        title: "Email",
        id: "email",
        sorting: false,
        templateBy: "email"
      },
      {
        title: "Employment Type",
        id: "employment_type",
        sorting: false,
        templateBy: "employment_type"
      },
      {
        title:'Date',
        id:'date',
        sorting:false,
        templateBy:'date'
      },
      {
        title:'Total(Logged Hr)',
        id:'total',
        sorting:false,
        templateBy:'total'
      },
      {
        title:'Final Approval',
        id:'final_Approval',
        sorting:false,
        templateBy:'final_Approval'
      }
    ];
    options: Table.Options = {
      selection: false,
    };
    constructor(public data: any[]) { }
  }
