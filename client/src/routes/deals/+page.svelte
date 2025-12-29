<script lang="ts">
    export let data;
  </script>
  
  <h1>Deals</h1>
  
  <ul>
    {#each data.deals as deal}
      <li>
        <strong>{deal.title}</strong><br />
        <span>${deal.salePrice}</span>{" "}
        <s>${deal.normalPrice}</s>
      </li>
    {/each}
  </ul>
  