import Owner from './Owner';

/**
 * Represents a GitHub repository's information.
 *
 * This interface defines the structure of information associated with a GitHub repository.
 * It includes details such as the repository's name, owner, whether it's private, and more.
 *
 * @interface Repo
 * @example
 * ```ts
 * const repository: Repo = {
 *   id: 12345,
 *   name: "example-repo",
 *   full_name: "username/example-repo",
 *   private: false,
 *   owner: {
 *     login: "exampleOwner",
 *     id: 123,
 *     // ...owner properties
 *   },
 *   // ...other properties
 * };
 * ```
 */
export default interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner?: Owner;
}
