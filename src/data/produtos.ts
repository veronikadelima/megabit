import { Produto } from "@/types/produtos";

export const placas_mae: Produto [] = [
  {
    id: 1,
    fabricante: "ASUS",
    modelo: "MX540-BR",
    valor: 1240.00,
    image: "https://cdn.awsli.com.br/600x1000/2557/2557636/produto/242353569/z790-aorus-pro-x-02-zl4ghoei4b.png",
    oferta: false
  },
  {
    id: 2,
    fabricante: "BIOSTAR",
    modelo: "1260-r7",
    valor: 1195.00,
    image: "https://images1.kabum.com.br/produtos/fotos/404821/placa-mae-asus-rog-strix-b760-f-gaming-intel-lga-1700-atx-ddr5-wifi-90mb1ct0-m0eay0_1674050530_g.jpg",
    oferta: false
  },
  {
    id: 3,
    fabricante: "GIGABYTE",
    modelo: "T567-RD",
    valor: 1235.00,
    image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/4/b450m-gaming4.jpg",
    oferta: false
  },
]

export const memorias: Produto [] = [
  {
    id: 1,
    fabricante: "ASUS",
    modelo: "DDR6-fill 16Gb",
    valor: 560.00,
    image: "https://cdn.awsli.com.br/2500x2500/1271/1271561/produto/200249758/tmpmemriaramgskilltridentz5rgbddr532gb2x16gb7800mhzcl361-50d7046dff.jpg",
    oferta: true
  },
  {
    id: 2,
    fabricante: "CORSAI",
    modelo: "SH-45 8Gb DDR4",
    valor: 465.00,
    image: "https://img.br.my-best.com/product_images/4e4024b930616085c757fb5d279faa5e.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=70fb0334351f1902adcccea29b5323b4",
    oferta: false
  },
  {
    id: 3,
    fabricante: "FURY",
    modelo: "HYPER 16Gb DDR4",
    valor: 389.00,
    image: "https://cdn.awsli.com.br/600x450/1271/1271561/produto/261515805/mem-ria-ram-corsair-vengeance-rgb-ddr5-96gb-2x48gb-6000mhz-cl30-xmpexpo--1--b5dnwayifl.jpg",
    oferta: false
  },
]

export const jogos: Produto [] = [
  {
    id: 1,
    fabricante: "CD PROJEKT RED",
    modelo: " The Witcher 3 - WILD HUT",
    valor: 230.00,
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
    oferta: false
  },
  {
    id: 2,
    fabricante: "UBSOFT",
    modelo: "Tom Clancy's The Division 2",
    valor: 49.00,
    image: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA13726_00/1/i_ebb51e47babede481b7eda44898d4f5c282df3a222a983670eed4c99cefe38ab/i/icon0.png",
    oferta: true
  },
  {
    id: 3,
    fabricante: "ROCKSTAR",
    modelo: "GTA V - Grand Theft Auto",
    valor: 128.00,
    image: "https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png",
    oferta: false
  },
]