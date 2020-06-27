<template>
    <div id="cooltitle">
        <hr>
        <h3>{{ text }}</h3>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'CoolTitleYeah',
    props: {
        text: String,
    }
}
</script>

<style scoped>
    #cooltitle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    hr {
        border: gray 2px solid;
        width: 33%;
        margin: auto;
        margin-left: 2%;
        margin-right: 2%; 
    }
</style>