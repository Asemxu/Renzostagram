<script>

    let Header;
    let LoadableContainer;
    let Loader;
    
    import('../components/Layout/Header.svelte').then(module =>{
        Header  = module.default 
    })
    import('../components/Layout/Loader.svelte').then(module =>{
        Loader  = module.default 
    })
    import('./LoadableContainer.svelte').then(module =>{
        LoadableContainer  = module.default 
    })
    import('../components/Layout/Loader.svelte').then(module =>{
        Loader  = module.default 
    })
</script>
<style>
    :global(body){
        background-color:#fafafa;
        color:rgba(38,38,38,0.7);
        margin:0;
        padding:0;
    }
    
    :global(h1,h2,h3){
        margin:0;
        padding:0;
    }

    :global(.icon){
        height:20px;
        object-fit:contain;
        width:20px;
    }

    :global(.pointer){
        cursor:pointer
    }

    :global(.list_unstyled){
        list-style: none;
    }
    
    :global(.btn){
        color: #3897f0;
        font-size: 12px;
        border:none;
        background-color: transparent;
        outline: none;
        font-family:"Lato",sans-serif;
        cursor: pointer;
    }

    :global(.btn_delete:hover){
        opacity:0.75;
    }

    :global(.addComment){
        font-family:"Lato",sans-serif;
    }

    :global(.disabled){
        pointer-events: none;
        opacity:0.35
    }

   

    :global(.lato) {
        font-family: Lato
    }
    :global(.pacifico) {
        font-family: Pacifico
    }

    :global(figure){
        margin:0;
    }
</style>
{#if Header}
    <svelte:component this={Header}/>
{/if}

{#if LoadableContainer}
    <svelte:component this={LoadableContainer} >
        <svelte:component this={Loader} />
    </svelte:component>
    
{/if}
