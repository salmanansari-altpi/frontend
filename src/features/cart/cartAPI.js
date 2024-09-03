export function addToCart(item) {
  return new Promise(async (resolve) => {
    const { user, ...other } = item;
    const response = await fetch(`http://localhost:8080/cart?id=${user}`, {
      method: "POST",
      body: JSON.stringify(other),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`http://localhost:8080/cart?id=${userId}`);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  const { id, product: productObj, ...other } = update;
  const product = productObj.id;
  const body = { ...other, product };
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + id, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data: { id: itemId } });
  });
}

export function resetCart(userId) {
  // get all items of user's cart - and then delete each
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId(userId);
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}
