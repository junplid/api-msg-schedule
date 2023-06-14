type item_increase = {
  value: number;
  type: "decimal" | "percentage" | string;
};

export const price_increase = async (
  price: number,
  list_increase: item_increase[]
): Promise<number> => {
  if (list_increase.length === 0) {
    return price;
  }
  return list_increase.reduce((ac, ob) => {
    if (ob.type === "percentage") {
      return ac * (ob.value / 100) + ac;
    }
    return ac + ob.value;
  }, price);
};
