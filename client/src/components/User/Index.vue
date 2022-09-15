<template>
    <h1>Get All Users</h1>
</template>

<script>
export default {
    created () {
        this.$http.get('http://localhost:8081/users')
        .then(function (response) {
        console.log(response)
        })
    }
}
</script>

<style scoped>

</style>