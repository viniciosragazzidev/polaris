export type ClientType = {
  id: string;
  accountId: string;
  name: string;
  email: string;
  phone: string;
  document: string;
  type: "fisica" | "juridica";
  createdAt: string;
  updatedAt: string;
};
