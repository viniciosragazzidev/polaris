import { ClientType } from "../types/app";

export const getClientsByAccountId = async (accountId: string) => {
  try {
    const res = await fetch(
      `http://localhost:4000/clients?accountId=${accountId}&_sort=name&_order=asc`,
      {
        cache: "no-cache",
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const addNewClient = async (data: ClientType) => {
  try {
    const res = await fetch("http://localhost:4000/clients", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const value = await res.json();
    if (res.ok) {
      return {
        success: true,
        data: value,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
