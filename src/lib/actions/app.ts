export const getCurrentAccount = async () => {
  try {
    const res = await fetch("http://192.168.1.3:4000/account", {
      cache: "no-cache",
    });
    const data = await res.json();
    return data[0];
  } catch (error) {
    console.log(error);
  }
};
