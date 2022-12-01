import { createBunny, getFamilies, checkAuth, logout } from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const familySelect = document.querySelector('.family-id');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async (e) => {
    // prevent default
    e.preventDefault();
    // get the name and family id from the form
    const data = new FormData(form);
    const name = data.get('bunny-name');
    const family = data.get('family-id');
    // use createBunny to create a bunny with this name and family id
    await createBunny(name, family);
    // console.log(createBunny);
    form.reset();
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM
    // go get the families from supabase
    // for each family
    // create an option tag
    // set the option's value and text content
    // and append the option to the select
    const families = await getFamilies();
    for (let family of families) {
    }
});

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
