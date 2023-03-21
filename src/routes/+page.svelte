

<div class="content">
    <div class="moves-slowly-to-new-pos text-6xl font-cassandra name text-zinc-300">
        Antonio Miguel Martel
    </div>
    {#if state[selectedState] === "Start"}
        <button on:click={nextState} class="button btn btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"  width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 4v16l13 -8z" />
            </svg>
        </button>
    {/if}
</div>


<script>
    let state = ["Start", "Menu"];
    let selectedState = 0;

    function nextState(){
        if(selectedState++ >= state.length) selectedState = 0
        selectedState++
    }
</script>

<style>
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        background: radial-gradient(circle, rgba(62,62,62,1) 0%, rgba(0,0,0,0.8211485277704832) 100%);
        
    }

    .name {
        margin-bottom: 1.25em;
        position: relative
    }

    .moves-slowly-to-new-pos {
        -moz-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }

</style>