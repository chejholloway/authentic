import Follower from "./Follower"; // Import the Follower interface

describe("Follower interface", () => {
  it("should have the required properties", () => {
    const follower: Follower = {
      login: "followerUser",
      id: 123,
      node_id: "abc123",
      avatar_url: "https://example.com/follower-avatar.png",
      gravatar_id: "def456",
      url: "https://api.github.com/users/followerUser",
      html_url: "https://github.com/followerUser",
      followers_url: "https://api.github.com/users/followerUser/followers",
      following_url:
        "https://api.github.com/users/followerUser/following{/other_user}",
      gists_url: "https://api.github.com/users/followerUser/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/followerUser/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/followerUser/subscriptions",
      organizations_url: "https://api.github.com/users/followerUser/orgs",
      repos_url: "https://api.github.com/users/followerUser/repos",
      events_url: "https://api.github.com/users/followerUser/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/followerUser/received_events",
      type: "User",
      site_admin: false,
    };

    expect(follower.login).toBeDefined();
    expect(follower.id).toBeDefined();
    expect(follower.node_id).toBeDefined();
    expect(follower.avatar_url).toBeDefined();
    expect(follower.gravatar_id).toBeDefined();
    expect(follower.url).toBeDefined();
    expect(follower.html_url).toBeDefined();
    expect(follower.followers_url).toBeDefined();
    expect(follower.following_url).toBeDefined();
    expect(follower.gists_url).toBeDefined();
    expect(follower.starred_url).toBeDefined();
    expect(follower.subscriptions_url).toBeDefined();
    expect(follower.organizations_url).toBeDefined();
    expect(follower.repos_url).toBeDefined();
    expect(follower.events_url).toBeDefined();
    expect(follower.received_events_url).toBeDefined();
    expect(follower.type).toBeDefined();
    expect(follower.site_admin).toBeDefined();
  });
});
