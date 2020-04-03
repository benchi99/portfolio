<template>
    <div id="start">
        <div id="header">
            <img id="logo" alt="my ugly mug" src="./../assets/yo.png">
            <div id="title">
                <h3 class="white-text">Rubén Bermejo Romero</h3>
                <h5 class="white-text">Técnico Superior en Desarrollo de Aplicaciones Multiplataforma</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartComponent',
}
</script>

<style scoped>
    #start {
        margin-top: 48px;
    }

    #header {
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border: black 1px solid;
        background: url('./../assets/background1.jpg') no-repeat center;
    }

    #header > * {
        padding: 30px;
    }
</style>