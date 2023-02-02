<template>
    <h1>Welcome to my new Blog page</h1>
    <p>This is my very first blog entry</p>
    <h1> This is where the links should be </h1>
    <router-link to="/">Go to Home</router-link>
    <br>
    <router-link to="/blog">Go to Blog</router-link>

    <div class="container">
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleFormControlInput1"
placeholder="name@example.com">
</div>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Comment</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="mb-3 right">
<button type="button" class="btn btn-primary">Post Comment</button>
</div>

</div>
</template>

    <style scoped>
    </style>