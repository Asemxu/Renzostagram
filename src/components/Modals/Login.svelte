<script>
  import LoginUser from '../../Forms/LoginUser.svelte';
  export let isClickRegister;
  export let isLogin
</script>
<style>
  .modal {
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 4px;
    background-color: white;
    width: 400px;
    height: auto;
    position: fixed;
    z-index: 9;
    padding: 1em;
  }
  .modal-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-head h2 {
    font-size: 16px;
  }
 

</style>

<div class="modal">
  <div class="modal-head lato">
    <h2>Iniciar Sesión</h2>
    <span class="pointer pacifico" on:click>X</span>
  </div>
  <div class="modal-content lato">
    <LoginUser {isLogin} {isClickRegister}/>
  </div>
</div>