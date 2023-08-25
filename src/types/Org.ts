/**
 * Represents a GitHub organization's information.
 *
 * This interface defines the structure of information associated with a GitHub organization.
 * It includes details such as the organization's name, profile URL, avatar URL, and more.
 *
 * @interface Org
 * @example
 * ```ts
 * const organization: Org = {
 *   login: "exampleOrg",
 *   id: 789,
 *   avatar_url: "https://example.com/org-avatar.jpg",
 *   // ...other properties
 * };
 * ```
 */
export default interface Org {
  avatar_url: string;
  description: string;
  events_url: string;
  hooks_url: string;
  id: number;
  issues_url: string;
  login: string;
  members_url: string;
  node_id: string;
  public_members_url: string;
  repos_url: string;
  url: string;
}
