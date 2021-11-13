<script>
    import Button from '../components/Shared/Button.svelte';
    import Input from '../components/Shared/Input.svelte';
    import Api from '../Api/Firebase';
    export let isClickRegister;
    export let isLogin;
    let isLoading = false;
    let api = new Api();


    let password;
    let email;

    const Login = async (e) =>{
        e.preventDefault();
        isLogin();
        // isLoading = true;
        // try{
        //     const response = await api.signIn(email,password)
        //     console.log(response)
        // }catch(err){
        //     console.log(err);
        // }
        // isLoading = false;
    }
  
</script>
<style>
     .comments_add {
      padding: 1em 1em 1em 1em;
      border-top: 1px solid rgba(219, 219, 219, 0.8);
      text-align:center
    }
    .comments_add form{
        text-align:center;
    }
    
</style>
<div class="comments_add">
    <form  on:submit={ (e) => Login(e)}>
        <Input className={"input lato mb-1"} type={"text"} handleInput={(e) => email = e.target.value } placeholder={"Correo Electrónico"} />
        <Input className={"input lato mb-1"} type={"text"} handleInput={(e) => password = e.target.value} placeholder={"Contraseña..."} />      
        <Button className={"btn-primary lato w-100"} action={() => ""} text={ isLoading ? "Cargando..." :"Iniciar como usuario"}/>
        <Button className={"btn-google lato w-100"} action={() => ""} text={"Iniciar con Google"}/>        
    </form>
    <Button className={"btn-google lato w-100"} action={isClickRegister} text={"Nuevo por aquí? !Regístrate!"}/>
    <div class="text-center mb-1" style="font-size:0.75rem;text-decoration:none">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" >Olvide mi contraseña</a>
    </div>
</div>