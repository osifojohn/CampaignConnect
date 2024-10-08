export const formatDate = (postedDate: number) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(new Date(postedDate));

export const formatBudget = (campaignBudget: string) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(campaignBudget));
