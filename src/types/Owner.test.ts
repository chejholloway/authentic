import Owner from "./Owner"; // Import the Owner interface

describe("Owner interface", () => {
  it("should have the required properties", () => {
    const owner: Owner = {
      login: "example",
      id: 123,
      node_id: "abc456",
      avatar_url: "https://example.com/owner-avatar.png",
      gravatar_id: "gravatar123",
      url: "https://api.github.com/users/example",
      html_url: "{process.env.REACT_APP_GITHUB_URL}/example",
      followers_url: "https://api.github.com/users/example/followers",
      following_url:
        "https://api.github.com/users/example/following{/other_user}",
      gists_url: "https://api.github.com/users/example/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/example/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/example/subscriptions",
      organizations_url: "https://api.github.com/users/example/orgs",
      repos_url: "https://api.github.com/users/example/repos",
      events_url: "https://api.github.com/users/example/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/example/received_events",
      type: "User",
      site_admin: false,
    };

    expect(owner.login).toBeDefined();
    expect(owner.id).toBeDefined();
    expect(owner.node_id).toBeDefined();
    expect(owner.avatar_url).toBeDefined();
    expect(owner.gravatar_id).toBeDefined();
    expect(owner.url).toBeDefined();
    expect(owner.html_url).toBeDefined();
    expect(owner.followers_url).toBeDefined();
    expect(owner.following_url).toBeDefined();
    expect(owner.gists_url).toBeDefined();
    expect(owner.starred_url).toBeDefined();
    expect(owner.subscriptions_url).toBeDefined();
    expect(owner.organizations_url).toBeDefined();
    expect(owner.repos_url).toBeDefined();
    expect(owner.events_url).toBeDefined();
    expect(owner.received_events_url).toBeDefined();
    expect(owner.type).toBeDefined();
    expect(owner.site_admin).toBeDefined();
  });
});
