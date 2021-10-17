<script>
    export let handleInput
    export let placeholder
    export let type
    export let className
   
</script>
<style>
    input {
      border: solid 1px #e9e9e9;
      border-radius: 5px;
      color: #696969;
      border: 1px solid transparent;
      font-size: 12px;
      outline: none;
      width: 100%;
      display: flex;
    }
</style>

<input
    class={className}
    {type}
    on:input={handleInput} 
    placeholder={placeholder}
/>