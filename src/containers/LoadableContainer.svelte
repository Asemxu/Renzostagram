<script>
    import Loadable from '../components/Shared/Loadable.svelte';

</script>


<Loadable loader={() => import('../Pages/Main.svelte')}>
    <slot></slot>
</Loadable>