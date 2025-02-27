<template>
  <nav>
    <ul class="flex underlined-menu" style="--gap: 8rem">
      <li class="active">
        <a class="ff-sans-cond uppercase text-white letter-spacing-2" href="/"
          ><span>00</span>Home</a
        >
      </li>
      <li>
        <a class="ff-sans-cond uppercase text-white letter-spacing-2" href="/destination"
          ><span>01</span>Destination</a
        >
      </li>
      <li>
        <a class="ff-sans-cond uppercase text-white letter-spacing-2" href="/crew"
          ><span>02</span>Crew</a
        >
      </li>
      <li>
        <a class="ff-sans-cond uppercase text-white letter-spacing-2" href="/technology"
          ><span>03</span>Technology</a
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul a {
  text-decoration: none;
}

ul a > span {
  font-weight: 700;
  margin-right: 0.5em;
}
</style>
