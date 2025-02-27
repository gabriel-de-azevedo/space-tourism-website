<template>
  <nav>
    <ul class="flex underlined-menu" style="--gap: 8rem">
      <li class="active">
        <a class="uppercase text-white letter-spacing-2" href="#"><span>00</span>Active</a>
      </li>
      <li>
        <a class="uppercase text-white letter-spacing-2" href="#"><span>01</span>Hovered</a>
      </li>
      <li>
        <a class="uppercase text-white letter-spacing-2" href="#"><span>02</span>Idle</a>
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
