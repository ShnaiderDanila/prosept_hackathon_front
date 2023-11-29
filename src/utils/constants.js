const productArr = [
  {
    id: 2,
    product_key: 546227,
    price: 233.00,
    product_image: 'https://cdn.akson.ru/webp/i/1963/1963594/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/sredstvo_universalnoe_prosept_universal_spray_500ml/',
    product_name: 'Средство универсальное Prosept Universal Spray, 500мл',
    date: '2023-07-11',
    dealer_id: 'Akson',
    state: 'Не определен'
  },
  {
    id: 3,
    product_key: 546408,
    price: 175.00,
    product_image: 'https://cdn.akson.ru/webp/p/seller/3c6a5d9f-4af1-45c8-992c-9d364239e8a8/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/kontsentrat_prosept_multipower_dlya_mytya_polov_tsitrus_1l/',
    product_name: 'Концентрат Prosept Multipower для мытья полов, цитрус 1л',
    date: '2023-07-11',
    dealer_id: 'Akson',
    state: 'Да'
  },
  {
    id: 4,
    product_key: 546234,
    price: 285.00,
    product_image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1638468502/lmcode/JzQLCEjsdEGhl5nNJpY3Gg/90162585.jpg',
    product_url: 'https://akson.ru//p/sredstvo_dlya_chistki_lyustr_prosept_universal_anti_dust_500ml/',
    product_name: 'Средство для чистки люстр Prosept Universal Anti-dust, 500мл',
    date: '2023-08-11',
    dealer_id: 'Akson',
    state: 'Не определен'
  },
  {
    id: 5,
    product_key: 651258,
    price: 362.00,
    product_image: 'https://cdn.akson.ru/webp/p/77ca1767-57b8-41f9-b7b0-7a973ea8c21d/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/udalitel_rzhavchiny_prosept_rust_remover_0_5l_023_05/',
    product_name: 'Удалитель ржавчины PROSEPT RUST REMOVER 0,5л 023-05',
    date: '2023-09-12',
    dealer_id: 'Ozon',
    state: 'Нет'
  },
  {
    id: 6,
    product_key: 546355,
    price: 205.00,
    product_image: 'https://cdn.akson.ru/webp/p/seller/27f95cff-eb3a-4676-8303-785a1013defd/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/sredstvo_moyushchee_dlya_bani_i_sauny_prosept_multipower_wood_1l/',
    product_name: 'Средство моющее для бани и сауны Prosept Multipower Wood 1л',
    date: '2023-07-11',
    dealer_id: 'Ozon',
    state: 'Нет'
  },
  {
    id: 7,
    product_key: 831859,
    price: 370.00,
    product_image: 'https://cdn.akson.ru/webp/p/831859/154edb62-55a6-41b1-93d9-be0ef8e87152/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/propitka_prosept_aquaisol_dlya_kamnya_kontsentrat_1_2_1l/',
    product_name: 'Пропитка PROSEPT Aquaisol для камня, концентрат  1:2  1л',
    date: '2024-06-06',
    dealer_id: 'Yandex',
    state: 'Да'
  },
  {
    id: 8,
    product_key: 831859,
    price: 370.00,
    product_image: 'https://cdn.akson.ru/webp/p/831859/154edb62-55a6-41b1-93d9-be0ef8e87152/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/propitka_prosept_aquaisol_dlya_kamnya_kontsentrat_1_2_1l/',
    product_name: 'Пропитка PROSEPT Aquaisol для камня, концентрат  1:2  1л',
    date: '2024-06-06',
    dealer_id: 'Yandex',
    state: 'Да'
  },
  {
    id: 9,
    product_key: 831859,
    price: 370.00,
    product_image: 'https://cdn.akson.ru/webp/p/831859/154edb62-55a6-41b1-93d9-be0ef8e87152/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/propitka_prosept_aquaisol_dlya_kamnya_kontsentrat_1_2_1l/',
    product_name: 'Пропитка PROSEPT Aquaisol для камня, концентрат  1:2  1л',
    date: '2024-06-06',
    dealer_id: 'Yandex',
    state: 'Да'
  },
  {
    id: 10,
    product_key: 831859,
    price: 370.00,
    product_image: 'https://cdn.akson.ru/webp/p/831859/154edb62-55a6-41b1-93d9-be0ef8e87152/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/propitka_prosept_aquaisol_dlya_kamnya_kontsentrat_1_2_1l/',
    product_name: 'Пропитка PROSEPT Aquaisol для камня, концентрат  1:2  1л',
    date: '2024-06-06',
    dealer_id: 'Yandex',
    state: 'Да'
  },
  {
    id: 11,
    product_key: 831859,
    price: 370.00,
    product_image: 'https://cdn.akson.ru/webp/p/831859/154edb62-55a6-41b1-93d9-be0ef8e87152/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/propitka_prosept_aquaisol_dlya_kamnya_kontsentrat_1_2_1l/',
    product_name: 'Пропитка PROSEPT Aquaisol для камня, концентрат  1:2  1л',
    date: '2024-06-06',
    dealer_id: 'Yandex',
    state: 'Да'
  },
  {
    id: 12,
    product_key: 831859,
    price: 370.00,
    product_image: 'https://cdn.akson.ru/webp/p/831859/154edb62-55a6-41b1-93d9-be0ef8e87152/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/propitka_prosept_aquaisol_dlya_kamnya_kontsentrat_1_2_1l/',
    product_name: 'Пропитка PROSEPT Aquaisol для камня, концентрат  1:2  1л',
    date: '2024-06-06',
    dealer_id: 'Yandex',
    state: 'Да'
  },
  {
    id: 13,
    product_key: 831859,
    price: 370.00,
    product_image: 'https://cdn.akson.ru/webp/p/831859/154edb62-55a6-41b1-93d9-be0ef8e87152/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/propitka_prosept_aquaisol_dlya_kamnya_kontsentrat_1_2_1l/',
    product_name: 'Пропитка PROSEPT Aquaisol для камня, концентрат  1:2  1л',
    date: '2024-06-06',
    dealer_id: 'Yandex',
    state: 'Да'
  },
  {
    id: 14,
    product_key: 831859,
    price: 370.00,
    product_image: 'https://cdn.akson.ru/webp/p/831859/154edb62-55a6-41b1-93d9-be0ef8e87152/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/propitka_prosept_aquaisol_dlya_kamnya_kontsentrat_1_2_1l/',
    product_name: 'Пропитка PROSEPT Aquaisol для камня, концентрат  1:2  1л',
    date: '2024-06-06',
    dealer_id: 'Yandex',
    state: 'Да'
  },
  {
    id: 15,
    product_key: 831859,
    price: 370.00,
    product_image: 'https://cdn.akson.ru/webp/p/831859/154edb62-55a6-41b1-93d9-be0ef8e87152/0.webp?q=89&bw=660&bh=660&c=white&maxw=660&maxh=660&_v=1',
    product_url: 'https://akson.ru//p/propitka_prosept_aquaisol_dlya_kamnya_kontsentrat_1_2_1l/',
    product_name: 'Пропитка PROSEPT Aquaisol для камня, концентрат  1:2  1л',
    date: '2024-06-06',
    dealer_id: 'Yandex',
    state: 'Да'
  },
]

export { productArr };
