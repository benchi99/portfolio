<template>
    <div id="header">
        <div id="header-card" class="card-panel green z-depth-5">
            <img id="logo" alt="my ugly mug" src="./../assets/yo.png">
            <div id="title">
                <h3 class="white-text">Rubén Bermejo Romero</h3>
                <h5 class="white-text">Higher Technician in Multiplatform Application Development</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartComponent',
}
</script>

<style>
    #header {
        height: 100%;
        background: url('./../assets/background1.jpg') no-repeat center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #header-card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border-radius: 20px;
    }

    #header-card > * {
        padding: 30px;
    }
</style>