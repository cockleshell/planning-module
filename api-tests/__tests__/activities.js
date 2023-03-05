describe('Test suites /api/activities', function() {
  test('Check data', async () => {

    const response = await fetch("http://localhost:3000/api/activities");

    const json = await response.json();
  
    expect(response.status).toBe(200);
    expect(Array.isArray(json.data) && json.data.length > 0).toBe(true);
  });
});