import Repo from "./Repo"; // Import the Repo interface

describe("Repo interface", () => {
  it("should have the required properties", () => {
    const repo: Repo = {
      id: 456,
      node_id: "def789",
      name: "example-repo",
      full_name: "example/example-repo",
      private: false,
    };

    expect(repo.id).toBeDefined();
    expect(repo.node_id).toBeDefined();
    expect(repo.name).toBeDefined();
    expect(repo.full_name).toBeDefined();
    expect(repo.private).toBeDefined();
  });
});
