import { Table } from 'src/app/modules/common/common-table/table.types';
export const DOCUMENTS_LIST_CONFIG = {
  label: 'Users Management',
  options: {
    search: true,
    pagination: true,
    // filter: UserListFilterComponent,
    searchPlaceholder: 'Search by name, email',
    addButton: true,
    ButtonDetails: {
      icon: 'download',
      buttonName: 'Download Report',
    },
  },
  total: 0,
};

export class UserTableDataSource implements Table.Source<any> {
  columns: Table.Column<any>[] = [
    {
      title: 'S.No.',
      id: 'sn',
      sorting: false,
      templateBy: 'sn',
    },
    {
      title: 'Candidate Name',
      id: 'c_name',
      sorting: false,
      templateBy: 'c_name',
    },
    {
      title: 'Experience',
      id: 'experience',
      sorting: false,
      templateBy: 'experience',
    },

    {
      title: 'Department',
      id: 'department',
      sorting: false,
      templateBy: 'department',
    },
    {
      title: 'Position',
      id: 'position',
      sorting: false,
      templateBy: 'position',
    },

    {
      title: 'Date of Referral',
      id: 'date_of_referral',
      sorting: false,
      templateBy: 'date_of_referral',
    },
    {
      title: 'Candidate Status',
      id: 'c_status',
      sorting: false,
      templateBy: 'c_status',
    },
    {
      title: 'ResumeCV',
      id: 'resume_cv',
      sorting: false,
      templateBy: 'resume_cv',
    }
  ];
  options: Table.Options = {
    selection: false,
  };
  constructor(public data: any[]) {}
}
