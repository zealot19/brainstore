export interface Employee {
  id:              string;
  employee_number: string;
  full_name:       string;
  first_name:      string;
  last_name:       string;
  status?:         string;
  status_label?:   string;
  is_active?:      boolean;
}
