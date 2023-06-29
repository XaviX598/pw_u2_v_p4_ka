<template>
    <div class="contenedorOps">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
    /* para quitar los puntos de la lista */
    list-style-type: none;
}

li {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: aliceblue;
    margin-bottom: 10px;
    width: 200px;
    cursor: pointer;
}

li:hover {
    background-color: green;
}

.contenedorOps{
    display: flex;
    justify-content: center;
    flex-direction: center;
}
</style>