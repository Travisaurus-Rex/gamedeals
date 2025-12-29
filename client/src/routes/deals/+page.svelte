<script lang="ts">
  import { getDealImage } from "$lib/images";
  export let data;
</script>
  
  <h1>Deals</h1>
  
  <div class="grid">
    {#each data.deals as deal}
      <article class="card">
        {#if getDealImage(deal)}
          <div class="image">
            <img
              src={getDealImage(deal)}
              alt={deal.title}
              loading="lazy"
            />
          </div>
        {/if}
  
        <div class="info">
          <h2>{deal.title}</h2>
  
          <div class="price">
            <span class="normal">${deal.normalPrice}</span>
            <span class="sale">${deal.salePrice}</span>
          </div>
  
          <div class="savings">
            −{Math.round(Number(deal.savings))}%
          </div>
        </div>
      </article>
    {/each}
  </div>

  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.25rem;
    }
  
    .card {
      display: flex;
      flex-direction: column;
    }
  
    .image {
      aspect-ratio: 16 / 9;
      background: #111;
      overflow: hidden;
    }
  
    .image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  
    .info {
      padding: 0.5rem 0;
    }
  
    h2 {
      font-size: 0.95rem;
      margin: 0 0 0.25rem;
      line-height: 1.3;
    }
  
    .price {
      display: flex;
      gap: 0.5rem;
      align-items: baseline;
    }
  
    .normal {
      text-decoration: line-through;
      opacity: 0.6;
      font-size: 0.85rem;
    }
  
    .sale {
      font-weight: 600;
      font-size: 1rem;
    }
  
    .savings {
      font-size: 0.8rem;
      color: #4ade80;
      margin-top: 0.25rem;
    }
  </style>
  
  