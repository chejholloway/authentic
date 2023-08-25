/**
 * Represents a GitHub follower's information.
 *
 * This interface defines the structure of information associated with a GitHub follower.
 * It includes details such as the follower's username, profile URL, avatar URL, and more.
 *
 * @interface Follower
 * @example
 * ```ts
 * const follower: Follower = {
 *   login: "exampleFollower",
 *   id: 456,
 *   avatar_url: "https://example.com/follower-avatar.jpg",
 *   // ...other properties
 * };
 * ```
 */
export default interface Follower {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
