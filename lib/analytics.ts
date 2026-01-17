// Fonction pour envoyer des événements à Google Analytics
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Événements spécifiques pour l'e-commerce
export const trackPurchase = (
  transactionId: string,
  value: number,
  currency: string = 'EUR',
  items: any[]
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items,
    })
  }
}

export const trackAddToCart = (itemId: string, itemName: string, price: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'add_to_cart', {
      currency: 'EUR',
      value: price,
      items: [
        {
          item_id: itemId,
          item_name: itemName,
          price: price,
        },
      ],
    })
  }
}

export const trackViewItem = (itemId: string, itemName: string, price: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'view_item', {
      currency: 'EUR',
      value: price,
      items: [
        {
          item_id: itemId,
          item_name: itemName,
          price: price,
        },
      ],
    })
  }
}

export const trackBeginCheckout = (value: number, items: any[]) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'begin_checkout', {
      currency: 'EUR',
      value: value,
      items: items,
    })
  }
}
