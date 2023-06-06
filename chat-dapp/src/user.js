import GUN from 'gun';
// security, encryption & authorization
import 'gun/sea';
// advanced exchange equation
import 'gun/axe';
import { writable } from 'svelte/store';


// database
export const db = GUN();

// user
export const user = db.user().recall({sessionStorage: true});

user.get('alias').on(v => username.set(v))

// listen to auth event
db.on('auth', async(event) => {
    const alias = await user.get('alias');
    username.set(alias);

    console.log('signed in as ${alias}');
})