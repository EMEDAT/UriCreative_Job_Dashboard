export interface JobApplication {
    id: string;
    jobTitle: string;
    companyName: string;
    status: 'pending' | 'accepted' | 'rejected';
    dateApplied: string; // ISO 8601 date format
  }
  