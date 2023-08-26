/**
 * Represents a GitHub organization's information.
 *
 * This interface defines the structure of information associated with a GitHub organization.
 * It includes details such as the organization's name, profile URL, avatar URL, and more.
 *
 * @interface Owner
 * @example
 * ```ts
 * const organization: Owner = {
 *   login: "exampleOwner",
 *   id: 789,
 *   avatar_url: "https://example.com/org-avatar.jpg",
 *   // ...other properties
 * };
 * ```
 */
export default interface Owner {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
}
