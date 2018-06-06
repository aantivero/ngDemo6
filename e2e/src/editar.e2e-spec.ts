
import {browser, by, element} from 'protractor';

describe('Editar', () => {
  beforeEach(async () => {
    await browser.get('/editar/1');
  });

  const name = element(by.id('name'));
  const street = element(by.id('street'));
  const city = element(by.id('city'));

  it('deberia poder ver una persona', async () => {
    expect(await element(by.css('h3')).getText()).toEqual('Alejandro Antivero');
    expect(await name.getAttribute('value')).toEqual('Alejandro Antivero');
    expect(await street.getAttribute('value')).toEqual('154 A');
    expect(await city.getAttribute('value')).toEqual('Berazategui');
  });

  it('debería por actualizar el nombre', async () => {
    const save = element(by.id('save'));
    name.sendKeys(' Won!');
    await save.click();
    // verificar que un elemento coincide
    const list = element.all(by.css('app-search table tbody tr'));
    expect(list.count()).toBe(1);
  });
});
