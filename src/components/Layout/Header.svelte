<script>
    import { heart , user_ , login} from '../../Images/assets';
    import { user } from '../../store/store';
    import { get } from 'svelte/store'
    import Modal from '../Shared/Modal.svelte';
    import Login from '../Modals/Login.svelte';
    import Register from '../Modals/Register.svelte';
    import { blur } from 'svelte/transition';
    let isModal = false;
    let isRegister = false;
    const isClickModal = () =>{
      isModal = !isModal
    }
    const isClickRegister = () =>{
        console.log("Entro");
        isRegister = !isRegister
    }
    const isLogin = () =>{
        user.update( n =>{
            n.likes = 0;
            return n;
        })
    }
</script>
<style>
    .header {
        background-color: white;
        position: fixed;
        width: 100%;
    }
    .header_container {
        grid-template-columns: minmax(auto, 936px);
        display: grid;
        justify-content: center;
        background-color: white;
        border-bottom: 1px solid rgba(38, 38, 38, 0.4);
    }
    .header_content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5em;
    }
    .header ul {
        list-style: none;
    }
    .header li {
        display: inline-flex;
        margin: 0 0 0 1em;
    }
    .header img {
        font-size: 16px;
        color: rgba(38, 38, 38, 0.7);
        cursor: pointer;
    }

    h1 {
        padding: 0;
        margin: 0;
        font-size: 28px;
        color: black;
        cursor: pointer;
        position: relative;
        background: #fff;
        mix-blend-mode: multiply;
        display: inline-block;
    }

    h1:before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at top left, #f09433, #bc1888);
        mix-blend-mode: screen;
        position: absolute;
        top: 0;
        left: 0;
    }
    .count_likes{
        font-family:"Lato",sans-serif;
        margin-left:0.5rem
    }
</style>
{#if isModal && !isRegister}
    <div transition:blur>
        <Modal>
            <Login {isLogin} on:click={isClickModal} {isClickRegister}/>
        </Modal>
    </div>
{:else if isModal && isRegister}
    <div transition:blur>
        <Modal>
            <Register on:click={isClickModal}/>
        </Modal>
    </div>
{/if}
<div class="header">
    <div class="header_container">
        <div class="header_content">
            <div class="header_logo">
                <h1 class="pacifico">Renzostagram</h1>
            </div>
            <div class="header_nav">
                <ul class="list_unstyled">
                    
                    {#if Object.keys($user).length > 0}
                        <li class="pointer">
                            <img src={heart} alt="font awesome" class="icon" />
                            {#if $user.likes > 0}
                                <span class="count_likes">{$user.likes}</span>
                            {/if}
                        </li>
                       
                        <li class="pointer" on:click={isClickModal}>
                            <img src={user_} alt="font awesome" class="icon" />
                        </li>
                    {:else}
                        <li class="pointer" on:click={isClickModal}>
                            <img src={login} alt="font awesome" class="icon" />
                        </li>
                    {/if}
                    
                </ul>
            </div>
        </div>
    </div>
</div>