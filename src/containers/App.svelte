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

    @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh7USSwaPGR_p.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh7USSwiPGQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/pacifico/v17/FwZY7-Qmy14u9lezJ-6K6MmTpA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/pacifico/v17/FwZY7-Qmy14u9lezJ-6D6MmTpA.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/pacifico/v17/FwZY7-Qmy14u9lezJ-6I6MmTpA.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/pacifico/v17/FwZY7-Qmy14u9lezJ-6J6MmTpA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/pacifico/v17/FwZY7-Qmy14u9lezJ-6H6Mk.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
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

    :global(.input){
        border:1px solid #b8b8b8!important;
        padding: 0.5rem 0.25rem;
    }
    :global(.btn-primary , .btn-google){
        background: radial-gradient(circle at top left, #f09433, #bc1888)!important;
        padding:0.5rem!important;
        color:white;
        border:0;
        outline:none;
        border-radius:10px;
        margin-bottom: 1rem;
        transition:all 300ms    
    }

    :global(.btn-primary:hover , .btn-google:hover){
        opacity:.75;
    }

    :global(.w-100){
        width:100%
    }
    :global(.mb-1){
        margin-bottom:1rem
    }

    :global(.text-end){
        text-align:end
    }
    :global(.text-center){
        text-align:center
    }
    :global(a){
        text-decoration:none;
        color:black;
        transition:all 300ms
    }
    :global(a:hover){
        color:blue;
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
