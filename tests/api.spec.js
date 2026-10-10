const { test, expect } = require('@playwright/test');

test('verify api response', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(1);
});