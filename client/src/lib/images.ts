export function getDealImage(deal: any) {
  if (deal.steamAppID) {
    return `https://cdn.cloudflare.steamstatic.com/steam/apps/${deal.steamAppID}/capsule_616x353.jpg`;
  }

  if (deal.thumb) {
    return deal.thumb;
  }

  return null;
}
