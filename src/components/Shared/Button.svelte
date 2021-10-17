<script>
    export let action;
    export let text;
    export let className;
</script>

<button on:click={action}  class="{className} pointer" > {text} </button>