export interface RegisterType {
  compayName: string;
}

export interface OrderStatusType {
  orderId: string;
  customerId: string;
  orderNumber: string;
  total: number;
  dateCreated: string;
  dateModified: string;
  orderStatus: number;
  description: string;
  systemIp: string | null;
  customerName: string;
  customerConfirmDelivery: boolean;
  vendorConfirmDelivery: boolean;
  orderDeclineReason: string;
  orderDeliveries: [];
  orderDeliveryAddresses: [];
  orderPurchasedHistories: [];
  orderPurchasedHistoryId: string;
  productId: string;
  vendorId: string;
  unitPrice: number;
  quantity: number;
  purchasedDate: string;
  product: string;
}

export interface ReportType {
  vendorId: string;
  referencNumber: string;
  title: string;
  category: string;
  description: string;
  sender: string;
  reportDate: string;
  status: string;
  reportId: string;
}

export interface ProductType {}
