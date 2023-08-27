/* eslint-enable no-undef */
import { rest } from "msw";

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_GITHUB_API_BASE_URL}${process.env.REACT_APP_GITHUB_USERS_QUERY}`,
    (req, res, ctx) => {
      const limit = Number(req.url.searchParams.get("limit"));
      const mockData = []; // Mock data array
      for (let i = 0; i < limit; i++) {
        mockData.push({ login: `user${i}`, id: i });
      }
      return res(ctx.json(mockData));
    },
  ),
  rest.get(
    `${process.env.REACT_APP_GITHUB_API_BASE_URL}/users/:username`,
    (req, res, ctx) => {
      const username = req.params.username;
      const mockResponse = { login: username, avatar_url: "mocked-avatar-url" };
      return res(ctx.json(mockResponse));
    },
  ),
  // Mock other endpoints similarly
];
