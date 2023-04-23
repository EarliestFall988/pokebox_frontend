import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemon = ref([
    {
      id: 0,
      name: 'Bulbasaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    },
    {
      id: 1,
      name: 'Ivysaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
    },
    {
      id: 2,
      name: 'Venusaur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
    },

    {
      id: 3,
      name: 'Charmander',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
    },

    {
      id: 4,
      name: 'Charmeleon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'
    }
    {
      id: 5,
      name: 'Charizard',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
    },
    {
      id: 6,
      name: 'Squirtle',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
    },
    {
      id: 7,
      name: 'Wartortle',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png'
    },
    {
      id: 8,
      name: 'Blastoise',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png'
    },
    {
      id: 9,
      name: 'Caterpie',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png'
    },
    {
      id: 10,
      name: 'Metapod',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png'
    },
    {
      id: 11,
      name: 'Butterfree',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png'
    },
    {
      id: 12,
      name: 'Weedle',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png'
    },
    {
      id: 13,
      name: 'Kakuna',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png'
    },
    {
      id: 14,
      name: 'Beedrill',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png'
    },
    {
      id: 15,
      name: 'Pidgey',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png'
    },
    {
      id: 16,
      name: 'Pidgeotto',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png'
    },
    {
      id: 17,
      name: 'Pidgeot',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png'
    },
    {
      id: 18,

      name: 'Rattata',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png'
    },
    {
      id: 19,
      name: 'Raticate',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png'
    },
    {
      id: 20,
      name: 'Spearow',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png'
    },
    {
      id: 21,
      name: 'Fearow',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png'
    },
    {
      id: 22,
      name: 'Ekans',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png'
    },
    {
      id: 23,
      name: 'Arbok',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png'
    },
    {
      id: 24,
      name: 'Pikachu',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
    },
    {
      id: 25,
      name: 'Raichu',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png'
    },
    {
      id: 26,
      name: 'Sandshrew',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png'
    },
    {
      id: 27,
      name: 'Sandslash',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png'
    },
    {
      id: 28,
      name: 'Nidoran♀',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png'
    },
    {
      id: 29,
      name: 'Nidorina',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png'
    },
    {
      id: 30,
      name: 'Nidoqueen',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png'
    },
    {
      id: 31,
      name: 'Nidoran♂',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png'
    },
    {
      id: 32,
      name: 'Nidorino',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png'
    },
    {
      id: 33,
      name: 'Nidoking',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png'
    },
    {
      id: 34,
      name: 'Clefairy',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png'
    },
    {
      id: 35,
      name: 'Clefable',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png'
    },
    {
      id: 36,
      name: 'Vulpix',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png'
    },
    {
      id: 37,
      name: 'Ninetales',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png'
    },
    {
      id: 38,
      name: 'Jigglypuff',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
    },
    {
      id: 39,
      name: 'Wigglytuff',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png'
    },
    {
      id: 40,
      name: 'Zubat',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png'
    },
    {
      id: 41,
      name: 'Golbat',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png'
    },
    {
      id: 42,
      name: 'Oddish',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png'
    },
    {
      id: 43,
      name: 'Gloom',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png'
    },
    {
      id: 44,
      name: 'Vileplume',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png'
    },
    {
      id: 45,
      name: 'Paras',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png'
    },
    {
      id: 46,
      name: 'Parasect',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png'
    },
    {
      id: 47,
      name: 'Venonat',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png'
    },
    {
      id: 48,
      name: 'Venomoth',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png'
    },
    {
      id: 49,
      name: 'Diglett',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png'
    },
    {
      id: 50,
      name: 'Dugtrio',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png'
    },
    {
      id: 51,
      name: 'Meowth',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png'
    },
    {
      id: 52,
      name: 'Persian',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png'
    },
    {
      id: 53,
      name: 'Psyduck',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png'
    },
    {
      id: 54,
      name: 'Golduck',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png'
    },
    {
      id: 55,
      name: 'Mankey',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png'
    },
    {
      id: 56,
      name: 'Primeape',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png'
    },
    {
      id: 57,
      name: 'Growlithe',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png'
    },
    {
      id: 58,
      name: 'Arcanine',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png'
    },
    {
      id: 59,
      name: 'Poliwag',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png'
    },
    {
      id: 60,
      name: 'Poliwhirl',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png'
    },
    {
      id: 61,
      name: 'Poliwrath',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png'
    },
    {
      id: 62,
      name: 'Abra',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png'
    },
    {
      id: 63,
      name: 'Kadabra',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png'
    },
    {
      id: 64,
      name: 'Alakazam',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png'
    },
    {
      id: 65,
      name: 'Machop',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png'
    },
    {
      id: 66,
      name: 'Machoke',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png'
    },
    {
      id: 67,
      name: 'Machamp',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png'
    },
    {
      id: 68,
      name: 'Bellsprout',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png'
    },
    {
      id: 69,
      name: 'Weepinbell',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png'
    },
    {
      id: 70,
      name: 'Victreebel',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png'
    },
    {
      id: 71,
      name: 'Tentacool',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png'
    },
    {
      id: 72,
      name: 'Tentacruel',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png'
    },
    {
      id: 73,
      name: 'Geodude',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png'
    },
    {
      id: 74,
      name: 'Graveler',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png'
    },
    {
      id: 75,
      name: 'Golem',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png'
    },
    {
      id: 76,
      name: 'Ponyta',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png'
    },
    {
      id: 77,
      name: 'Rapidash',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png'
    },
    {
      id: 78,
      name: 'Slowpoke',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png'
    },
    {
      id: 79,
      name: 'Slowbro',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png'
    },
    {
      id: 80,
      name: 'Magnemite',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png'
    },
    {
      id: 81,
      name: 'Magneton',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png'
    },
    {
      id: 82,
      name: "Farfetch'd",
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png'
    },
    {
      id: 83,
      name: 'Doduo',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png'
    },
    {
      id: 84,
      name: 'Dodrio',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png'
    },
    {
      id: 85,
      name: 'Seel',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png'
    },
    {
      id: 86,
      name: 'Dewgong',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png'
    },
    {
      id: 87,
      name: 'Grimer',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png'
    },
    {
      id: 88,
      name: 'Muk',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png'
    },
    {
      id: 89,
      name: 'Shellder',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png'
    },
    {
      id: 90,
      name: 'Cloyster',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png'
    },
    {
      id: 91,
      name: 'Gastly',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png'
    },
    {
      id: 92,
      name: 'Haunter',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png'
    },
    {
      id: 93,
      name: 'Gengar',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png'
    },
    {
      id: 94,
      name: 'Onix',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png'
    },
    {
      id: 95,
      name: 'Drowzee',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png'
    },
    {
      id: 96,
      name: 'Hypno',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png'
    },
    {
      id: 97,
      name: 'Krabby',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png'
    },
    {
      id: 98,
      name: 'Kingler',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png'
    },
    {
      id: 99,
      name: 'Voltorb',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png'
    },
    {
      id: 100,
      name: 'Electrode',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png'
    },
    {
      id: 101,
      name: 'Exeggcute',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png'
    },
    {
      id: 102,
      name: 'Exeggutor',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png'
    },
    {
      id: 103,
      name: 'Cubone',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png'
    },
    {
      id: 104,
      name: 'Marowak',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png'
    },
    {
      id: 105,
      name: 'Hitmonlee',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png'
    },
    {
      id: 106,
      name: 'Hitmonchan',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png'
    },
    {
      id: 107,
      name: 'Lickitung',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png'
    },
    {
      id: 108,
      name: 'Koffing',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png'
    },
    {
      id: 109,
      name: 'Weezing',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png'
    },
    {
      id: 110,
      name: 'Rhyhorn',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png'
    },
    {
      id: 111,
      name: 'Rhydon',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png'
    },
    {
      id: 112,
      name: 'Chansey',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png'
    },
    {
      id: 113,
      name: 'Tangela',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png'
    },
    {
      id: 114,
      name: 'Kangaskhan',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png'
    },
    {
      id: 115,
      name: 'Horsea',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png'
    },
    {
      id: 116,
      name: 'Seadra',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png'
    },
    {
      id: 117,
      name: 'Goldeen',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png'
    },
    {
      id: 118,
      name: 'Seaking',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png'
    },
    {
      id: 119,
      name: 'Staryu',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png'
    },
    {
      id: 120,
      name: 'Starmie',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png'
    },
    {
      id: 121,
      name: 'Mr-mime',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png'
    },
    {
      id: 122,
      name: 'Scyther',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png'
    },
    {
      id: 123,
      name: 'Jynx',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png'
    },
    {
      id: 124,
      name: 'Electabuzz',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png'
    },
    {
      id: 125,
      name: 'Magmar',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png'
    },
    {
      id: 126,
      name: 'Pinsir',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png'
    },
    {
      id: 127,
      name: 'Tauros',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png'
    },
    {
      id: 128,
      name: 'Magikarp',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png'
    },
    {
      id: 129,
      name: 'Gyarados',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png'
    },
    {
      id: 130,
      name: 'Lapras',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png'
    },
    {
      id: 131,
      name: 'Ditto',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'
    },
    {
      id: 132,
      name: 'Eevee',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png'
    },
    {
      id: 133,
      name: 'Vaporeon',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'
    },
    {
      id: 134,
      name: 'Jolteon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png'
    },
    {
      id: 135,
      name: 'Flareon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png'
    },
    {
      id: 136,
      name: 'Porygon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png'
    },
    {
      id: 137,
      name: 'Omanyte',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png'
    },
    {
      id: 138,
      name: 'Omastar',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png'
    },
    {
      id: 139,
      name: 'Kabuto',

      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png'
    },
    {
      id: 140,
      name: 'Kabutops',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png'
    },
    {
      id: 141,
      name: 'Aerodactyl',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png'
    },
    {
      id: 142,
      name: 'Snorlax',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png'
    },
    {
      id: 143,
      name: 'Articuno',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png'
    },
    {
      id: 144,
      name: 'Zapdos',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png'
    },
    {
      id: 145,
      name: 'Moltres',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png'
    },
    {
      id: 146,
      name: 'Dratini',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png'
    },
    {
      id: 147,
      name: 'Dragonair',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png'
    },
    {
      id: 148,
      name: 'Dragonite',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png'
    },
    {
      id: 149,
      name: 'Mewtwo',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
    },
    {
      id: 150,
      name: 'Mew',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png'
    },
    {
      id: 151,
      name: 'Chikorita',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png'
    },
    {
      id: 152,
      name: 'Bayleef',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png'
    },
    {
      id: 153,
      name: 'Meganium',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png'
    },
    {
      id: 154,
      name: 'Cyndaquil',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png'
    },
    {
      id: 155,
      name: 'Quilava',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png'
    },
    {
      id: 156,
      name: 'Typhlosion',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png'
    },
    {
      id: 157,
      name: 'Totodile',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png'
    },
    {
      id: 158,
      name: 'Croconaw',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png'
    },
    {
      id: 159,
      name: 'Feraligatr',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png'
    },
    {
      id: 160,
      name: 'Sentret',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png'
    },
    {
      id: 161,
      name: 'Furret',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png'
    },
    {
      id: 162,
      name: 'Hoothoot',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png'
    },
    {
      id: 163,
      name: 'Noctowl',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png'
    },
    {
      id: 164,
      name: 'Ledyba',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png'
    },
    {
      id: 165,
      name: 'Ledian',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png'
    },
    {
      id: 166,
      name: 'Spinarak',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png'
    },
    {
      id: 167,
      name: 'Ariados',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png'
    },
    {
      id: 168,
      name: 'Crobat',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png'
    },
    {
      id: 169,
      name: 'Chinchou',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png'
    },
    {
      id: 170,
      name: 'Lanturn',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png'
    },
    {
      id: 172,
      name: 'Pichu',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png'
    },
    {
      id: 173,
      name: 'Cleffa',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png'
    },
    {
      id: 174,
      name: 'Igglybuff',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png'
    },
    {
      id: 175,
      name: 'Togepi',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png'
    },
    {
      id: 176,
      name: 'Togetic',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png'
    },
    {
      id: 177,
      name: 'Natu',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png'
    },
    {
      id: 178,
      name: 'Xatu',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png'
    },
    {
      id: 179,
      name: 'Mareep',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png'
    },
    {
      id: 180,
      name: 'Flaaffy',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png'
    },
    {
      id: 181,
      name: 'Ampharos',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png'
    },
    {
      id: 182,
      name: 'Bellossom',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png'
    },
    {
      id: 183,
      name: 'Marill',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png'
    },
    {
      id: 184,
      name: 'Azumarill',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png'
    },
    {
      id: 185,
      name: 'Sudowoodo',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png'
    },
    {
      id: 186,
      name: 'Politoed',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png'
    },
    {
      id: 187,
      name: 'Hoppip',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png'
    },
    {
      id: 188,
      name: 'Skiploom',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png'
    },
    {
      id: 189,
      name: 'Jumpluff',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png'
    },
    {
      id: 190,
      name: 'Aipom',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png'
    },
    {
      id: 191,
      name: 'Sunkern',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png'
    },
    {
      id: 192,
      name: 'Sunflora',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png'
    },
    {
      id: 193,
      name: 'Yanma',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png'
    },
    {
      id: 194,
      name: 'Wooper',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png'
    },
    {
      id: 195,
      name: 'Quagsire',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png'
    },
    {
      id: 196,
      name: 'Espeon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png'
    },
    {
      id: 197,
      name: 'Umbreon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png'
    },
    {
      id: 198,
      name: 'Murkrow',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png'
    },
    {
      id: 199,
      name: 'Slowking',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png'
    },
    {
      id: 200,
      name: 'Misdreavus',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png'
    },
    {
      id: 201,
      name: 'Unown',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png'
    },
    {
      id: 202,
      name: 'Wobbuffet',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png'
    },
    {
      id: 203,
      name: 'Girafarig',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png'
    },
    {
      id: 204,
      name: 'Pineco',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png'
    },
    {
      id: 205,
      name: 'Forretress',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png'
    },
    {
      id: 206,
      name: 'Dunsparce',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png'
    },
    {
      id: 207,
      name: 'Gligar',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png'
    },
    {
      id: 208,
      name: 'Steelix',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png'
    },
    {
      id: 209,
      name: 'Snubbull',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png'
    },
    {
      id: 210,
      name: 'Granbull',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png'
    },
    {
      id: 211,
      name: 'Qwilfish',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png'
    },
    {
      id: 212,
      name: 'Scizor',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png'
    },
    {
      id: 213,
      name: 'Shuckle',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png'
    },
    {
      id: 214,
      name: 'Heracross',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png'
    },
    {
      id: 215,
      name: 'Sneasel',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png'
    },
    {
      id: 216,
      name: 'Teddiursa',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png'
    },
    {
      id: 217,
      name: 'Ursaring',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png'
    },
    {
      id: 218,
      name: 'Slugma',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png'
    },
    {
      id: 219,
      name: 'Magcargo',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png'
    },
    {
      id: 220,
      name: 'Swinub',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png'
    },
    {
      id: 221,
      name: 'Piloswine',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png'
    },
    {
      id: 222,
      name: 'Corsola',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png'
    },
    {
      id: 223,
      name: 'Remoraid',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png'
    },
    {
      id: 224,
      name: 'Octillery',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png'
    },
    {
      id: 225,
      name: 'Delibird',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png'
    },
    {
      id: 226,
      name: 'Mantine',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png'
    },
    {
      id: 227,
      name: 'Skarmory',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png'
    },
    {
      id: 228,
      name: 'Houndour',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png'
    },
    {
      id: 229,
      name: 'Houndoom',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png'
    },
    {
      id: 230,
      name: 'Kingdra',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png'
    },
    {
      id: 231,
      name: 'Phanpy',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png'
    },
    {
      id: 232,
      name: 'Donphan',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png'
    },
    {
      id: 233,
      name: 'Porygon2',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png'
    },
    {
      id: 234,
      name: 'Stantler',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png'
    },
    {
      id: 235,
      name: 'Smeargle',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png'
    },
    {
      id: 236,
      name: 'Tyrogue',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png'
    },
    {
      id: 237,
      name: 'Hitmontop',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png'
    },
    {
      id: 238,
      name: 'Smoochum',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png'
    },
    {
      id: 239,
      name: 'Elekid',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png'
    },
    {
      id: 240,
      name: 'Magby',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png'
    },
    {
      id: 241,
      name: 'Miltank',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png'
    },
    {
      id: 242,
      name: 'Blissey',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png'
    },
    {
      id: 243,
      name: 'Raikou',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png'
    },
    {
      id: 244,
      name: 'Entei',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png'
    },
    {
      id: 245,
      name: 'Suicune',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png'
    },
    {
      id: 246,
      name: 'Larvitar',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png'
    },
    {
      id: 247,
      name: 'Pupitar',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png'
    },
    {
      id: 248,
      name: 'Tyranitar',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png'
    },
    {
      id: 249,
      name: 'Lugia',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png'
    },
    {
      id: 250,
      name: 'Ho-Oh',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png'
    },
    {
      id: 251,
      name: 'Celebi',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png'
    },
    {
      id: 252,
      name: 'Treecko',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png'
    },
    {
      id: 253,
      name: 'Grovyle',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png'
    },
    {
      id: 254,
      name: 'Sceptile',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png'
    },
    {
      id: 255,
      name: 'Torchic',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png'
    },
    {
      id: 256,
      name: 'Combusken',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png'
    },
    {
      id: 257,
      name: 'Blaziken',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png'
    },
    {
      id: 258,
      name: 'Mudkip',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png'
    },
    {
      id: 259,
      name: 'Marshtomp',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png'
    },
    {
      id: 260,
      name: 'Swampert',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png'
    },
    {
      id: 261,
      name: 'Poochyena',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png'
    },
    {
      id: 262,
      name: 'Mightyena',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png'
    },
    {
      id: 263,
      name: 'Zigzagoon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png'
    },
    {
      id: 264,
      name: 'Linoone',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png'
    },
    {
      id: 265,
      name: 'Wurmple',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png'
    },
    {
      id: 266,
      name: 'Silcoon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png'
    },
    {
      id: 267,
      name: 'Beautifly',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png'
    },
    {
      id: 268,
      name: 'Cascoon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png'
    },
    {
      id: 269,
      name: 'Dustox',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png'
    },
    {
      id: 270,
      name: 'Lotad',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png'
    },
    {
      id: 271,
      name: 'Lombre',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png'
    },
    {
      id: 272,
      name: 'Ludicolo',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png'
    },
    {
      id: 273,
      name: 'Seedot',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png'
    },
    {
      id: 274,
      name: 'Nuzleaf',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png'
    },
    {
      id: 275,
      name: 'Shiftry',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png'
    },
    {
      id: 276,
      name: 'Taillow',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png'
    },
    {
      id: 277,
      name: 'Swellow',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png'
    },
    {
      id: 278,
      name: 'Wingull',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png'
    },
    {
      id: 279,
      name: 'Pelipper',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png'
    },
    {
      id: 280,
      name: 'Ralts',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png'
    },
    {
      id: 281,
      name: 'Kirlia',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png'
    },
    {
      id: 282,
      name: 'Gardevoir',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png'
    },
    {
      id: 283,
      name: 'Surskit',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png'
    },
    {
      id: 284,
      name: 'Masquerain',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png'
    },
    {
      id: 285,
      name: 'Shroomish',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png'
    },
    {
      id: 286,
      name: 'Breloom',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png'
    },
    {
      id: 287,
      name: 'Slakoth',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png'
    },
    {
      id: 288,
      name: 'Vigoroth',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png'
    },
    {
      id: 289,
      name: 'Slaking',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png'
    },
    {
      id: 290,
      name: 'Nincada',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png'
    },
    {
      id: 291,
      name: 'Ninjask',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png'
    },
    {
      id: 292,
      name: 'Shedinja',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png'
    },
    {
      id: 293,
      name: 'Whismur',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png'
    },
    {
      id: 294,
      name: 'Loudred',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png'
    },
    {
      id: 295,
      name: 'Exploud',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png'
    },
    {
      id: 296,
      name: 'Makuhita',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png'
    },
    {
      id: 297,
      name: 'Hariyama',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png'
    },
    {
      id: 298,
      name: 'Azurill',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png'
    },
    {
      id: 299,
      name: 'Nosepass',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png'
    },
    {
      id: 300,
      name: 'Skitty',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png'
    },
    {
      id: 301,
      name: 'Delcatty',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png'
    },
    {
      id: 302,
      name: 'Sableye',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png'
    },
    {
      id: 303,
      name: 'Mawile',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png'
    },
    {
      id: 304,
      name: 'Aron',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png'
    },
    {
      id: 305,
      name: 'Lairon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png'
    },
    {
      id: 306,
      name: 'Aggron',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png'
    },
    {
      id: 307,
      name: 'Meditite',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png'
    },
    {
      id: 308,
      name: 'Medicham',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png'
    },
    {
      id: 309,
      name: 'Electrike',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png'  
    },
    {
      id: 310,
      name: 'Manectric',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png'
    },
    {
      id: 311,
      name: 'Plusle',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png'
    },
    {
      id: 312,
      name: 'Minun',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png'
    },
    {
      id: 313,
      name: 'Volbeat',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png'
    },
    {
      id: 314,
      name: 'Illumise',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png'
    },

    {
      id: 315,
      name: 'Roselia',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png'
    },
    {
      id: 316,
      name: 'Gulpin',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png'
    },
    {
      id: 317,
      name: 'Swalot',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png'
    },
    {
      id: 318,
      name: 'Carvanha',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png'
    },
    {
      id: 319,
      name: 'Sharpedo',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png'
    },
    {
      id: 320,
      name: 'Wailmer',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png'
    },
    {
      id: 321,
      name: 'Wailord',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png'
    },
    {
      id: 322,
      name: 'Numel',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png'
    },
    {
      id: 323,
      name: 'Camerupt',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png'
    },
    {
      id: 324,
      name: 'Torkoal',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png'
    },
    {
      id: 325,
      name: 'Spoink',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png'
    },
    {
      id: 326,
      name: 'Grumpig',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png'
    },
    {
      id: 327,
      name: 'Spinda',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png'
    },
    {
      id: 328,
      name: 'Trapinch',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png'
    },
    {
      id: 329,
      name: 'Vibrava',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png'
    },
    {
      id: 330,
      name: 'Flygon',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png'
    },
    {
      id: 331,
      name: 'Cacnea',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png'
    },
    {
      id: 332,
      name: 'Cacturne',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png'
    },
    



    

  return { pokemon }

  //   const count = ref(0)
  //   const doubleCount = computed(() => count.value * 2)
  //   function increment() {
  //     count.value++
  //   }

  //   return { count, doubleCount, increment }
})
