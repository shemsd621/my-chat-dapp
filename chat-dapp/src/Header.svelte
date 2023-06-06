<script>
    import { username, user } from './user';

    function signout() {
        user.leave();
        username.set('');
    }
</script>

<header>
    {#if $username}
        <div class="user-bio">
            <span>Hello <strong>{$username}</strong></span>
            <!-- Generate an icon with the user's initials using DiceBear API -->
            <img src={'https://avatars.dicebear.com/api/initials/${$username}.svg'} alt="avatar" />
        </div>

        <button class="signout-button"on:click={signout}>
            Sign Out
        </button>
    {:else}
        <h3>Gun.js chat</h3>
    {/if}
</header>