<template>
  <div>
    <div>
      <RouterLink to="/example03/foods" style="text-decoration: none">美食</RouterLink>
      |
      <RouterLink :to="{ name: 'foods' }" style="text-decoration: none">美食</RouterLink>
      |
      <RouterLink to="/example03/location" style="text-decoration: none">本地</RouterLink>
      |
      <a href="" @click.prevent style="text-decoration: none">跑腿</a>
    </div>
    <RouterView style="padding: 5px"></RouterView>
  </div>
</template>
