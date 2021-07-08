export const getProducts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_PRODUCT}/products`, {
        method: 'GET',
        headers: {
            'accept-language': 'en-US,en;q=0.9',
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
        }
      });
      return await response.json();
    } catch (err) {}
  };
  
  