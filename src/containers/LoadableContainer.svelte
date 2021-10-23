<script>
    import Loadable from './Loadable.svelte';

</script>


<Loadable loader={() => import('../Pages/Main.svelte')}>
    <slot></slot>
</Loadable>