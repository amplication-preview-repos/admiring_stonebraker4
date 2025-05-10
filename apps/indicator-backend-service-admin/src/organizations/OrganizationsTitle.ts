import { Organizations as TOrganizations } from "../api/organizations/Organizations";

export const ORGANIZATIONS_TITLE_FIELD = "id";

export const OrganizationsTitle = (record: TOrganizations): string => {
  return record.id?.toString() || String(record.id);
};
