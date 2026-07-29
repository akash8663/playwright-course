import { expect, test } from "./fixtures";


// Sanity check so the suite stays green before you start. Replace/extend below.
test('sanity', async ({ page }) => {
  expect(page).toBeTruthy();
});

// TODO: implement the module 8 task — see README.md in this folder.
test('Verify dropdown handling', async({ formPage }) =>{
  
  await formPage.basicDropdown.selectOption({ label: 'Option 1' });
  await expect(formPage.basicDropdown).toHaveValue('1');

  await formPage.countryDropdown.selectOption({ value: 'BD' });
  await expect(formPage.countryDropdown).toHaveValue('BD');
  
})

test('Verify todo app functionality', async ({ todoPage }) => {
  await todoPage.addTodoItem('Pay bills');
  await todoPage.addTodoItem('Collect rents');
  await todoPage.checkTodoItem('Pay bills');
  await todoPage.verifyTodoItemChecked('Pay bills');
  const todoItem = todoPage.page.getByRole('listitem').filter({ hasText: 'Pay bills' }).getByRole('checkbox');
  await expect(todoItem).toBeChecked();
  const todoItem2 = todoPage.page.getByRole('listitem').filter({ hasText: 'Collect rents' }).getByRole('checkbox');
  await expect(todoItem2).not.toBeChecked();
});