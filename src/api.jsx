import { countries } from './country.js';
const URLS = {
  GENDER: 'https://api.genderize.io',
  COUNTRY: 'https://api.nationalize.io',
};
export async function getNameInfo(userName) {
  const nameInfo = {};
  const urlGender = `${URLS.GENDER}?name=${userName}`;
  const responseName = await fetch(urlGender);
  const dataName = await responseName.json();
  !dataName.gender
    ? (nameInfo.gender = `${userName} not found`)
    : (nameInfo.gender = `${userName} is ${dataName.gender}`);
  const urlCountry = `${URLS.COUNTRY}?name=${userName}`;

  try {
    const responseCountry = await fetch(urlCountry);
    const dataCountry = await responseCountry.json();
    const country = countries[dataCountry.country[0].country_id];
    nameInfo.country = `Country: ${country}`;
  } catch {
    nameInfo.country = `Country not found`;
  }
  return nameInfo;
}
