/** Vendor/product pairs that need ` ↔ non-US \ swap */
const swapDevices = [
    { vendor_id: 76,   product_id: 615  },
    { vendor_id: 1452, product_id: 615  },
    { vendor_id: 1133, product_id: 45929 },
  ];
  
  export const devices = swapDevices.map(({ vendor_id, product_id }) => ({
    identifiers: {
      is_keyboard: true,
      vendor_id,
      product_id,
    },
    simple_modifications: [
      { from: { key_code: "grave_accent_and_tilde" }, to: [{ key_code: "non_us_backslash" }] },
      { from: { key_code: "non_us_backslash"     }, to: [{ key_code: "grave_accent_and_tilde" }] },
    ],
  }));
  