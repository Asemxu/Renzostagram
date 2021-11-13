<script>
    import Timeline from '../components/Main/Timeline.svelte';
    import Sidebar from '../components/Main/Sidebar.svelte';
    import { user } from '../store/store';
    import { get } from 'svelte/store';
</script>
<style>
    .main {
        display: grid;
        grid-template-columns: minmax(auto, 936px);
        justify-content: center;
        background-color: #fafafa;
    }
    .main_container {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 2em;
        padding: 3em 2em;
    }

    @media screen and (max-width:768px){
        .main_container{
            grid-gap: 0;
            grid-template-columns: 1fr;
        }
    }
</style>

<div class="main">
    <div class="main_container">
        <Timeline/>
        {#if Object.keys($user).length > 0}
            <Sidebar />
        {/if}
    </div>
</div>
