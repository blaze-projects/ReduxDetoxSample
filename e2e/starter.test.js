describe('Goals', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('Create goal and add task', async () => {
    await element(by.text('Add Goal')).tap();
    await element(by.id('GoalTitle')).replaceText("Sample Goal");
    await element(by.id('GoalDescription')).replaceText("Sample Goal Description");
    await element(by.text('Add Goal')).tap();
    await expect(element(by.text('Sample Goal'))).toBeVisible();
    await element(by.text('Sample Goal')).tap();
    await element(by.text('Add Task')).tap();
    await element(by.id('taskName')).replaceText("Sample Task");
    await element(by.id('taskDescription')).replaceText("Sample Task Description");
    await element(by.text('Add Task')).tap();
    await expect(element(by.text('Sample Task'))).toBeVisible();
  });


});
















