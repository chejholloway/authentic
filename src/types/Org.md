## Org Interface

Represents a GitHub organization's information.

This interface defines the structure of information associated with a GitHub organization.
It includes details such as the organization's name, profile URL, avatar URL, and more.

### Interface Example

```ts
const organization: Org = {
  login: "exampleOrg",
  id: 789,
  avatar_url: "https://example.com/org-avatar.jpg",
  // ...other properties
};
