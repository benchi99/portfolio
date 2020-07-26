<template>
    <div id="cooltitle">
        <hr>
        <h3 class="white-text">{{ text }}</h3>
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
        background-color: #35363A;
    }

    hr {
        border: white 2px solid;
        width: 33%;
        margin: auto;
        margin-left: 2%;
        margin-right: 2%; 
    }
</style>