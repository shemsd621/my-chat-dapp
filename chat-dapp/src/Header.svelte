<script>
    import { username, user } from './user';

    function signout() {
        user.leave();
        username.set('');
    }
</script>

<header>
    <h1></h1>
</header>